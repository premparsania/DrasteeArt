import React from "react";
import { Link } from "react-router-dom";

type Prop = {
  Img: string;
  link: string;
  Title: string;
};

function MainCardOdd({ Img, link,Title }: Prop) {
  return (
    <div className="py-8 lg:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 duration-500 ease-in-out transition-all">
        <Link
          to={link}
          className="flex flex-col items-center md:flex-row -mx-4"
        >
          <div className="md:flex-1 px-4">
            <div>
              <div className="h-64 md:h-80 rounded-lg bg-black mb-4">
                <div
                  className="h-64 md:h-80 rounded-lg bg-black mb-4 flex items-center justify-center"
                >
                  <span className="text-5xl">
                    <img src={Img} alt="" className="bg-black" />
                  </span>
                </div>
              </div>
             </div>
          </div>
          <div className="md:flex-1 px-4 text-center my-10">
            <h2 className="mb-2 leading-tight tracking-tight font-bold text-gray-800 text-2xl md:text-3xl">
              {Title}
            </h2>
            <p className="text-gray-500 text-sm">
            Decorative Design By <span className="font-bold"> Drastee Art Zone</span>
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default MainCardOdd;
