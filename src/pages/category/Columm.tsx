import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Footer } from "../../components";

function Columm() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <section className="my-20">
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
                Column
              </a>
            </div>
          </div>
        </div>
        {/* ============================================ Card =============================================== */}
        <section className="w-[90%]  mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 items-center justify-items-center justify-between gap-y-5 gap-x-5 ">
          {BorderData.map((item, index) => {
            return (
              // bg-[#38ae54]/80\
              <div className="w-full">
                <div key={index} className="bg-black shadow-md w-full">
                  <div className="md:flex-1">
                    <div x-data="{ image: 1 }" x-cloak>
                      <div className="h-64 md:h-80 rounded-lg object-cover mb-4">
                        <div
                          x-show="image === 1"
                          className="h-64 md:h-80 rounded-lg  object-cover mb-4 flex flex-col items-center justify-center"
                        >
                          <span className="w-full text-left text-lg text-white ms-4">
                            {item.Title}
                          </span>
                          <span className="text-5xl object-cover zoom_ef">
                            <img src={item.Img} alt="" className="zoom_eff" />
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
                  </div>
                </div>
                <span className={`${item?.Size ? "" : "md:p-2"}`}>
                  {item?.Size}
                </span>
              </div>
            );
          })}
        </section>
      </section>
      <Footer />
    </>
  );
}

export default Columm;

const BorderData = [
  {
    Img: "/images/columm/C-1.PNG",
    Title: "C-1",
    Size:"0-150mm"
  },
  {
    Img: "/images/columm/C-2.PNG",
    Title: "C-2",
    Size:"380x530x70mm"
  },
  {
    Img: "/images/columm/C-3.PNG",
    Title: "C-3",
    Size:"0-180mm"
  },
  {
    Img: "/images/columm/C-4.PNG",
    Title: "C-4",
    Size:"380x530x70mm"
  },
  {
    Img: "/images/columm/C-5.PNG",
    Title: "C-5",
    Size:"0-180mm"
  },
  {
    Img: "/images/columm/C-6.PNG",
    Title: "C-6",
    Size:"380x530x70mm"
  },
];
