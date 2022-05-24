import React, { Component } from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";

const CustomForm = ({ status, message, onValidated }) => {
  const clearField = document.querySelector(".email");

  let email;
  const submit = () =>
    email &&
    email.value.indexOf("@") > -1 &&
    onValidated({
      EMAIL: email.value,
    });

  if (status === "success" || status === "sending" || status === "error")
    clearField.value = "";

  return (
    <div>
      {status === "sending" && (
        <div className="flex justify-center mt-6 text-blue-500 font-semibold">
          sending...
        </div>
      )}
      {status === "error" && (
        <div
          className="flex justify-center mt-6 text-red-500 font-semibold sm:flex justify-center mt-6 ml-6"
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      {status === "success" && (
        <div
          className="flex justify-center mt-6 text-green-500 font-semibold"
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}

      <div className="flex justify-center mt-6">
        <div className="bg-white rounded-lg">
          <div className="flex flex-wrap justify-between shadow-lg md:flex-row">
            <input
              className="email m-1 p-2 appearance-none text-sm focus:outline-none"
              ref={(node) => (email = node)}
              type="email"
              placeholder="Your email"
            />

            <button
              className="submitSubscribeBtn w-full m-1 p-2 text-sm text-white rounded-lg font-semibold uppercase lg:w-auto"
              onClick={submit}
            >
              subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

class MailchimpSubscribeContainer extends Component {
  render() {
    const url = `https://raddapparel.us7.list-manage.com/subscribe/post?u=${process.env.REACT_APP_MAILCHIMP_U}&id=${process.env.REACT_APP_MAILCHIMP_ID}`;
    return (
      <div>
        <MailchimpSubscribe
          url={url}
          render={({ subscribe, status, message }) => (
            <CustomForm
              status={status}
              message={message}
              onValidated={(formData) => subscribe(formData)}
            />
          )}
        />
      </div>
    );
  }
}

export default MailchimpSubscribeContainer;
