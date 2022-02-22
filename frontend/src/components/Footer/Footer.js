import React from "react";

const Footer = () => {
    return (
        <footer class="flex justify-center px-4 text-gray-100 bg-gray-800">
            <div class="container py-6">
                <h1 class="text-center text-lg font-bold lg:text-2xl">
                    Join 31,000+ other and never miss out on new tips, tutorials, and more.
                </h1>

                <div class="flex justify-center mt-6">
                    <div class="bg-white rounded-lg">
                        <div class="flex flex-wrap justify-between md:flex-row">
                            <input type="email" class="m-1 p-2 appearance-none text-gray-700 text-sm focus:outline-none" placeholder="Enter your email"/>
                            <button class="w-full m-1 p-2 text-sm bg-gray-800 rounded-lg font-semibold uppercase lg:w-auto">subscribe</button>
                        </div>
                    </div>
                </div>

                <hr class="h-px mt-6 bg-gray-700 border-none"/>

                <div class="flex flex-col items-center justify-between mt-6 md:flex-row">
                    <div>
                        <a href="/" class="text-xl font-bold">Brand</a>
                    </div>
                    <div class="flex mt-4 md:m-0">
                        <div class="-mx-4">
                        <a href="/" class="px-4 text-sm">About</a>
                        <a href="/" class="px-4 text-sm">Blog</a>
                        <a href="/" class="px-4 text-sm">News</a>
                        <a href="/" class="px-4 text-sm">Contact</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;