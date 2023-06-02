import React from "react";
import { Link } from "react-router-dom";

type Prop = {
  Img: string;
  link: string;
  Title: string;
};

function MainCardEven({ Img, link, Title }: Prop) {
  return (
    <div className="py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        <Link
          to={link}
          className="flex flex-col-reverse items-center md:flex-row -mx-4"
        >
          <div className="md:flex-1 flex flex-col items-end px-4">
            <h2 className="mb-2 leading-tight md:text-right lg:text-right tracking-tight font-bold text-gray-800 text-2xl md:text-3xl">
              {Title}
            </h2>
            <span className="text-gray-500 text-sm w-full md:text-right lg:text-right">
              Decorative Design By <span className="font-bold"> Drastee Art Zone</span>
            </span>
          </div>
          <div className="md:flex-1 px-4">
            <div x-data="{ image: 1 }" x-cloak>
              <div className="h-64 md:h-80 rounded-lg bg-gray-100 mb-4">
                <div
                  // x-show="image === 1"
                  className="h-64 md:h-80 rounded-lg bg-gray-100 mb-4 flex items-center justify-center"
                >
                  <span className="text-5xl zoom_ef">
                    <img src={Img} alt="" className="zoom_eff bg-black" />
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
