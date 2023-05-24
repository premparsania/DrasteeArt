import React from "react";
import { Link } from "react-router-dom";

type Prop = {
  Img: string;
  link: string;
};

function MainCardEven({ Img, link }: Prop) {
  return (
    <div className="sm:py-14 lg:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        <Link
          to={link}
          className="flex flex-col-reverse items-center md:flex-row -mx-4"
        >
          <div className="md:flex-1 flex flex-col items-end px-4">
            <h2 className="mb-2 leading-tight md:text-right lg:text-left tracking-tight font-bold text-gray-800 text-2xl md:text-3xl">
              Lorem ipsum dolor, sit amet consectetur, adipisicing elit.
            </h2>
            <span className="text-gray-500 text-sm w-full md:text-right lg:text-left">
              By{" "}
              <a href="#" className="text-indigo-600 hover:underline">
                ABC Company
              </a>
            </span>

            <p className="text-gray-500 md:text-right lg:text-left">
              Lorem ipsum, dolor sit, amet consectetur adipisicing elit. Vitae
              exercitationem porro saepe ea harum corrupti vero id laudantium
              enim, libero blanditiis expedita cupiditate a est.
            </p>
          </div>
          <div className="md:flex-1 px-4">
            <div x-data="{ image: 1 }" x-cloak>
              <div className="h-64 md:h-80 rounded-lg bg-black mb-4">
                <div
                  // x-show="image === 1"
                  className="h-64 md:h-80 rounded-lg bg-black mb-4 flex items-center justify-center"
                >
                  <span className="text-5xl">
                    <img src={Img} alt="" className="bg-black" />
                  </span>
                </div>
              </div>

              <div className="flex -mx-2 mb-4">
                <template x-for="i in 4">
                  <div className="flex-1 px-2">
                    <button className="focus:outline-none w-full rounded-lg h-24 md:h-32 bg-gray-100 flex items-center justify-center">
                      <span x-text="i" className="text-2xl"></span>
                    </button>
                  </div>
                </template>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default MainCardEven;
