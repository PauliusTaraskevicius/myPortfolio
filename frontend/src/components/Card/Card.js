import React from "react";

import ConnectApi from "../api/ConnectApi";
import "./Card.css";

const Card = () => {
  const BASE_URL = "http://127.0.0.1:8000";
  const API_URL = "http://127.0.0.1:8000/posts/";
  const [dataState] = ConnectApi(API_URL);

  return (
    <section id="work" class="pt-20 lg:pt-[120px] pb-10 lg:pb-20">
      <div class="container">
        <div class="flex flex-wrap justify-center -mx-4">
          <div class="w-full px-4">
            <div class="text-center mx-auto mb-[60px] lg:mb-20 max-w-[510px]">
              <span class="font-semibold text-lg text-primary mb-2 block">
                My projects
              </span>
              <h2
                class="
                  font-bold
                  text-3xl
                  sm:text-4xl
                  md:text-[40px]
                  text-dark
                  mb-4
                  "
              >
                Latest work
              </h2>
              <p class="text-base text-body-color">
                There are many variations of passages of Lorem Ipsum available
                but the majority have suffered alteration in some form.
              </p>
            </div>
          </div>
        </div>
        <div class="flex flex-wrap -mx-4">
          {dataState.data.map((post) => (
            <div class="w-full md:w-1/2 lg:w-1/3 px-4">
              <div class="max-w-[370px] mx-auto mb-10">
                <div class="rounded overflow-hidden mb-8">
                  <img
                    src={`${BASE_URL}${post.thumbnail}`}
                    alt="work_img"
                    class="w-full"
                  />
                </div>
                <div>
                  <span
                    class="
                     bg-primary
                     rounded
                     inline-block
                     text-center
                     py-1
                     px-4
                     text-xs
                     leading-loose
                     font-semibold
                     text-white
                     mb-5
                     "
                  >
                    {post.created}
                  </span>
                  <h3>
                    <a
                      href="/"
                      class="
                        font-semibold
                        text-xl
                        sm:text-2xl
                        lg:text-xl
                        xl:text-2xl
                        mb-4
                        inline-block
                        text-dark
                        hover:text-primary
                        "
                    >
                      {post.title}
                    </a>
                  </h3>
                  <p class="text-base text-body-color">{post.sub_title}</p>
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
