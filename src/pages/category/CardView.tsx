import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function CardView() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="text-center py-10">
        <div className="w-[90%] m-auto">
          <div className="flex items-center space-x-2 text-black text-sm">
            <Link to="/" className="hover:text-[#38ae54]">
              Dashboard
            </Link>
            <span>
              <svg
                className="h-4 w-4 leading-none text-black"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </span>
            <a href="#" className=" hover:text-[#38ae54]">
              Category Name
            </a>
          </div>
        </div>
      </div>
      {/* ============================================ Card =============================================== */}
      <section className="w-[90%]  mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 items-center justify-items-center justify-between gap-y-5 gap-x-5 ">
        {[{}, {}, {}, {}].map((item, index) => {
          return (
            // bg-[#38ae54]/80
            <div key={index} className="bg-[#262626]/30 shadow-md w-full">
              <div className="md:flex-1">
                <div x-data="{ image: 1 }" x-cloak>
                  <div className="h-64 md:h-80 rounded-lg object-cover mb-4">
                    <div
                      x-show="image === 1"
                      className="h-64 md:h-80 rounded-lg  object-cover mb-4 flex items-center justify-center"
                    >
                      <span className="text-5xl object-cover zoom_ef">
                        <img
                          src="http://pu.vienhung.com/img/products/VPM-123110-1000x562-1.jpg"
                          alt=""
                          className="zoom_eff"
                        />
                      </span>
                    </div>
                  </div>
                  <div className="flex -mx-2">
                    <template x-for="i in 4">
                      <div className="flex-1 px-2">
                        <button className="focus:outline-none w-full rounded-lg h-24 md:h-32 bg-gray-100 flex items-center justify-center">
                          <span x-text="i" className="text-2xl"></span>
                        </button>
                      </div>
                    </template>
                  </div>
                </div>
                <div className="px-4 py-2">
                  <span className="text-gray-400 mr-3 uppercase text-xs">
                    Brand
                  </span>
                  <p className="text-lg font-bold text-black truncate block capitalize">
                    Product Name
                  </p>
                  <div className="flex items-center">
                    <p className="text-lg font-semibold text-black cursor-auto my-3">
                      $149
                    </p>
                    <del>
                      <p className="text-sm text-gray-600 cursor-auto ml-2">
                        $199
                      </p>
                    </del>
                    <div className="ml-auto">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        className="bi bi-bag-plus"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"
                        />
                        <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
}

export default CardView;
