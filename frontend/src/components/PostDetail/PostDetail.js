import React from "react";

import { useParams } from "react-router-dom";

import ConnectApi from "../api/ConnectApi";

const PostDetail = () => {
  const { slug } = useParams();

  const API_URL = `http://127.0.0.1:8000/posts/${slug}`;
  const [dataState] = ConnectApi(API_URL);

  const BASE_URL = "http://127.0.0.1:8000";

  return (
    <div className="mx-auto px-4 py-8 max-w-xl my-20">
      <div className="bg-white shadow-2xl rounded-lg mb-6 tracking-wide">
        <div className="md:flex-shrink-0">
          <img
            src={`${BASE_URL}${dataState.data.thumbnail}`}
            alt="mountains"
            className="w-full h-64 rounded-lg rounded-b-none"
          />
        </div>
        <div className="px-4 py-2 mt-2">
          <h1 className="font-bold text-2xl text-gray-800 tracking-normal">
            {dataState.data.title}
          </h1>
          <h2 className="font-bold text-1xl text-gray-700 tracking-normal">
            {dataState.data.sub_title}
          </h2>
          <p className="text-sm text-gray-700 px-2 mr-1">{dataState.data.body}</p>
          
          <div className="author flex items-center -ml-3 my-3">
            <div className="user-logo">
              <img
                className="w-12 h-12 object-cover rounded-full mx-4 shadow"
                src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=731&q=80"
                alt="avatar"
              />
            </div>
            <h2 className="text-sm tracking-tighter text-gray-900 ">
              <a href="/">By Mohammed Ibrahim</a>{" "}
              <span className="text-gray-600">{dataState.data.created}</span>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetail;
