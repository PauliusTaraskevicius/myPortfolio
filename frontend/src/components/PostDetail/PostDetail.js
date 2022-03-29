import React from "react";

import { useParams, useNavigate } from "react-router-dom";

import ConnectApi from "../api/ConnectApi";

const PostDetail = () => {
  const { slug } = useParams();
  let history = useNavigate();

  let back = (e) => {
    e.stopPropagation();
    history("/");
  };

  const API_URL = `http://127.0.0.1:8000/posts/${slug}`;
  const [dataState] = ConnectApi(API_URL);

  const BASE_URL = "http://127.0.0.1:8000";

  return (
    <div className="fixed inset-0 overflow-y-auto">
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0"></div>
        </div>
        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          &#8203;
        </span>
        <div
          className="inline-block align-bottom bg-white rounded-xl text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          <div className="md:flex-shrink-0">
            <img
              src={`${BASE_URL}${dataState.data.thumbnail}`}
              alt="post_image"
              className="w-full rounded-lg rounded-b-none object-cover"
            />
          </div>
          <div className="header-modal py-3 px-4 bg-blue-400 text-white font-semibold shadow-lg text-lg break-words">
            {dataState.data.title}
          </div>
          <div className="header-modal py-3 px-4 text-gray-400 font-semibold text-md break-words">
            {dataState.data.sub_title}
          </div>
          <div className="header-modal px-4 text-gray-400 text-sm">
            {dataState.data.created}
          </div>
          <div className="body-modal p-4">
            <p
              className="text-gray-400"
              dangerouslySetInnerHTML={{ __html: dataState.data.body }}
            />
          </div>
          <div className="footer-modal px-4 pt-2.5 pb-4">
            <div className="flex justify-between">
              <img
                className="w-12 h-12 object-cover rounded-full mx-1 shadow"
                src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=731&q=80"
                alt="avatar"
              />
              <button
                className="ml-2 bg-red-500 text-white px-8 rounded-lg py-2 hover:bg-red-700"
                onClick={back}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetail;
