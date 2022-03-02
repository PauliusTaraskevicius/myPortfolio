import React from "react";

import { useParams } from "react-router-dom";

import ConnectApi from "../api/ConnectApi";

const PostDetail = (params) => {
  const { slug } = useParams();

  const API_URL = `http://127.0.0.1:8000/posts/${slug}`;
  const [dataState] = ConnectApi(API_URL);

  const BASE_URL = "http://127.0.0.1:8000";


  return (

    <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
      <div class="md:p-8 p-2 bg-white">
        <img
          class="rounded-lg w-full"
          src={`${BASE_URL}${dataState.data.thumbnail}`}
          alt='post_img'
        />

        <p class="text-indigo-500 font-semibold text-base mt-2">
          {dataState.data.title}
        </p>

        <h1 class="font-semibold text-gray-900 leading-none text-xl mt-1 capitalize truncate">
          {dataState.data.sub_title}
        </h1>

        <div class="max-w-full">
          <p class="text-base font-medium tracking-wide text-gray-600 mt-1">
            {dataState.data.body}
          </p>
        </div>
        <div class="flex items-center space-x-2 mt-20">
          <img
            class="w-10 h-10 object-cover object-center rounded-full"
            src="https://randomuser.me/api/portraits/men/54.jpg"
            alt="random user"
          />
          <div>
            <p class="text-gray-900 font-semibold">Lugano Shabani</p>
            <p class="text-gray-500 font-semibold text-sm">
              Feb 24,2021 &middot; 6 min read
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetail;
