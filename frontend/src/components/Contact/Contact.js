import React from "react";

import emailjs from 'emailjs-com';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Contact = () => {

    const successMsg = () => toast.success('Message sent!🥳', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });

    const errorMsg = () => toast.error('Error! Try again later...⛔', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_8pbkc5o', 'template_sngs0tw', e.target, 'user_3KB9mIe7w6vZiZyS1F2zm')
            .then((result) => {
                console.log(result.text);
                successMsg();
            }, (error) => {
                console.log(error.text);
                errorMsg();
            });
            e.target.reset();
    };
    
    return (
        <div className="contact-form flex justify-center">
            <form onSubmit={sendEmail} className="form bg-transparent p-6 my-10 relative">
            <ToastContainer 
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
               <h3 className="text-2xl text-white-900 font-semibold text-center ">Contact me!</h3>
               <div className="flex space-x-5 mt-3">
                   <input type="text" name="name" id="formborder" placeholder="Your Name" className="p-2 w-1/2" required/>
                   <input type="tel" name="phone" id="formborder" placeholder="Your Number" className="p-2 w-1/2"/>
               </div>
               <input type="email" name="email" id="formborder" placeholder="Your Email" className="p-2 w-full mt-3" required/>
               <textarea name="message" id="formborder" cols="10" rows="3" placeholder="Your message..." className="p-2 mt-3 w-full"></textarea>
               <p className="font-bold text-sm mt-3">GDPR Agreement *</p>
               <div className="flex items-baseline space-x-2 mt-2">
                   <input type="checkbox" name="" id="" className="inline-block" required/>
                   <p className="text-white-600 text-sm">I consent to having this website store my submitted information so they can respond to my inquiry.</p>
               </div>
               <button type="submit" value="Submit" id="submit-btn" className="w-full mt-6 text-white bg-black font-semibold p-3 rounded-full">Submit</button>
               <div className="text-center">
               </div>
           </form>
        </div>
    );
};

export default Contact;
