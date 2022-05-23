import React from "react";

import { Link } from "react-router-dom";

import ConnectApi from "../api/ConnectApi";

import "./Card.css";

const Card = () => {
  const BASE_URL = "http://127.0.0.1:8000";
  const API_URL = "http://127.0.0.1:8000/posts/";
  const [dataState] = ConnectApi(API_URL);

  return (
    <section id="work" className="pt-20 lg:pt-[120px] pb-10 lg:pb-20">
      <div className="container">
        <div className="flex flex-wrap justify-center -mx-4">
          <div className="w-full px-4">
            <div className="text-center mx-auto mb-[60px] lg:mb-20 max-w-[510px]">
              <h2 className="font-bold text-3xl mb-2 block">My projects</h2>
              <span className="text-base">
                Here's a list of most of the projects I've been working on
                lately.
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap -mx-4 text-center">
          {dataState.data.map((post) => (
            <div key={post.slug} className="zoom w-full md:w-1/2 lg:w-1/3 px-4">
              <div className="max-w-[370px] mx-auto mb-10">
                <div className="rounded overflow-hidden mb-4">
                  <img
                    src={`${BASE_URL}${post.thumbnail}`}
                    alt="post_img"
                    className="w-full"
                  />
                </div>
                <div>
                  <h3>
                    <Link
                      to={`/posts/${post.slug}`}
                      className="
                        fadeIn
                        font-semibold
                        text-xl
                        sm:text-2xl
                        lg:text-xl
                        xl:text-2xl
                        mb-2
                        inline-block
                        hover:text-primary
                        "
                    >
                      {post.title}
                    </Link>
                  </h3>
                  <span className="text-base">{post.sub_title}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <hr />
    </section>
  );
};

export default Card;
