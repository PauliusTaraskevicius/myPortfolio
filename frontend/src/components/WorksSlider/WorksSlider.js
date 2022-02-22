import React from "react";

import { useEffect, useState } from "react";

import "./WorksSlider.css";

const imgs=[
    'https://images.unsplash.com/photo-1585255318859-f5c15f4cffe9?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixlib=rb-1.2.1&q=80&w=500',
    'https://images.unsplash.com/photo-1584226761916-3fd67ab5ac3a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixlib=rb-1.2.1&q=80&w=500',
    'https://images.unsplash.com/photo-1585179292338-45ba1f62f082?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixlib=rb-1.2.1&q=80&w=500',
    'https://images.unsplash.com/photo-1584753987666-ead137ec0614?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixlib=rb-1.2.1&q=80&w=500',
    'https://images.unsplash.com/photo-1584691267914-91c0bee55964?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixlib=rb-1.2.1&q=80&w=500',
    'https://images.unsplash.com/photo-1585084335487-f653d0859c14?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixlib=rb-1.2.1&q=80&w=500',
    'https://images.unsplash.com/photo-1583217874534-581393fd5325?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixlib=rb-1.2.1&q=80&w=500',
]

const WorksSlider = () => {
  const [index, setIndex] = useState();

  useEffect(() => {
    setIndex(0);
  }, []);

  const next = () => {
    if (index === imgs.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

  const prev = () => {
    if (index === 0) {
      setIndex(imgs.length - 1);
    } else {
      setIndex(index - 1);
    }
  };

  const divStyle = {
    'min-height': '19rem'
  }

  const spanStyleNext = {
    transform: 'scaleX(1)'
  }

  const spanStylePrev = {
    transform: 'scaleX(-1)'
  }

  return (


    <div className="mx-auto p-16 sm:p-24">
        
    {/* <!-- Carousel Body --> */}
    <div className="relative rounded-lg block md:flex items-center bg-gray-100 shadow-xl" style={divStyle}>
        <div className="relative w-full md:w-2/5 h-full overflow-hidden rounded-t-lg md:rounded-t-none md:rounded-l-lg" style={divStyle}>
            <img className="absolute inset-0 w-full h-full object-cover object-center" src={imgs[index]} alt=""/>
            <div className="absolute inset-0 w-full h-full bg-gray-900 opacity-50"></div>
            <div className="absolute inset-0 w-full h-full flex items-center justify-center fill-current text-white">
            </div>
        </div>
        <div className="w-full md:w-3/5 h-full flex items-center bg-gray-100 rounded-lg">
            <div className="p-12 md:pr-24 md:pl-16 md:py-12">
            <p className="text-gray-600"><span className="text-gray-900">Missguided</span> is a UK-based fashion retailer that has nearly doubled in size since last year. They integrated Stripe to deliver seamless checkout across mobile and web for customers in 100+ countries, all while automatically combating fraud.</p>
            <a className="flex items-baseline mt-3 text-indigo-600 hover:text-indigo-900 focus:text-indigo-900" href="/">
                <span>Learn more about our users</span>
                <span className="text-xs ml-1">&#x279c;</span>
            </a>
            </div>
            <svg className="hidden md:block absolute inset-y-0 h-full w-24 fill-current text-gray-100 -ml-12" viewBox="0 0 100 100" preserveAspectRatio="none">
            <polygon points="50,0 100,0 50,100 0,100" />
            </svg>
        </div>
        <button className="absolute top-0 mt-32 left-0 bg-black rounded-full shadow-md h-12 w-12 text-2xl text-indigo-600 hover:text-indigo-400 focus:text-indigo-400 -ml-6 focus:outline-none focus:shadow-outline">
            <span className="block" style={spanStylePrev} onClick={prev}>&#x279c;</span>
        </button>
        <button className="absolute top-0 mt-32 right-0 bg-black rounded-full shadow-md h-12 w-12 text-2xl text-indigo-600 hover:text-indigo-400 focus:text-indigo-400 -mr-6 focus:outline-none focus:shadow-outline">
            <span className="block" style={spanStyleNext} onClick={next}>&#x279c;</span>
        </button>
        </div>
        <hr/>
    </div>
    
  );
};

export default WorksSlider;
