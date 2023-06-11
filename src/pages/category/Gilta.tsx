import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Footer } from "../../components";

function Gilta() {
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
                Gilta
              </a>
            </div>
          </div>
        </div>
        {/* ============================================ Card =============================================== */}
        <section className="w-[90%]  mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 items-center justify-items-center justify-between gap-y-5 gap-x-5 ">
          {BorderData.map((item, index) => {
            return (
              // bg-[#38ae54]/80
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

export default Gilta;

const BorderData = [
  {
    Img: "/images/Gilta/G-1.PNG",
    Title: "G-1",
    Size: "51x50x70xL-2400mm",
  },
  {
    Img: "/images/Gilta/G-2.PNG",
    Title: "G-2",
    Size:"",
  },
  {
    Img: "/images/Gilta/G-3.PNG",
    Title: "G-3",
    Size:"",
  },
  {
    Img: "/images/Gilta/G-4.PNG",
    Title: "G-4",
    Size:"",
  },
  {
    Img: "/images/Gilta/G-5.PNG",
    Title: "G-5",
    Size:"80x80x113xL-2400mm"
  },
  {
    Img: "/images/Gilta/G-6.PNG",
    Title: "G-6",
    Size:"",
  },
  {
    Img: "/images/Gilta/G-7.PNG",
    Title: "G-7",
    Size:"",
  },
  {
    Img: "/images/Gilta/G-8.PNG",
    Title: "G-8",
    Size:"",
  },
  {
    Img: "/images/Gilta/G-9.PNG",
    Title: "G-9",
    Size:"",
  },
  {
    Img: "/images/Gilta/G-10.PNG",
    Title: "G-10",
    Size:"",
  },
  {
    Img: "/images/Gilta/G-11.PNG",
    Title: "G-11",
    Size:"",
  },
  {
    Img: "/images/Gilta/G-12.PNG",
    Title: "G-12",
    Size:"",
  },
  {
    Img: "/images/Gilta/G-13.PNG",
    Title: "G-13",
    Size:"",
  },
  {
    Img: "/images/Gilta/G-14.PNG",
    Title: "G-14",
    Size:"",
  },
  {
    Img: "/images/Gilta/G-15.PNG",
    Title: "G-15",
    Size:"",
  },
  {
    Img: "/images/Gilta/G-16.PNG",
    Title: "G-16",
    Size:"",
  },
  {
    Img: "/images/Gilta/G-17.PNG",
    Title: "G-17",
    Size:"152x180x235xL-2400mm",
  },
  {
    Img: "/images/Gilta/G-18.PNG",
    Title: "G-18",
    Size:"330x395x510xL-2400mm",
  },
  {
    Img: "/images/Gilta/G-19.PNG",
    Title: "G-19",
    Size:"",
  },
  {
    Img: "/images/Gilta/G-20.PNG",
    Title: "G-20",
    Size:"125x120x160xL-2400mm",
  },
  {
    Img: "/images/Gilta/G-21.PNG",
    Title: "G-21",
    Size:"120x120x168xL-2400mm",
  },
  {
    Img: "/images/Gilta/G-22.PNG",
    Title: "G-22",
    Size:"",
  },
  {
    Img: "/images/Gilta/G-23.PNG",
    Title: "G-23",
    Size:"",
  },
  {
    Img: "/images/Gilta/G-24.PNG",
    Title: "G-24",
    Size:"10x16xL-2400mm",
  },
  {
    Img: "/images/Gilta/G-25.PNG",
    Title: "G-25",
    Size:"14x25xL-2400mm",
  },
  {
    Img: "/images/Gilta/G-26.PNG",
    Title: "G-26",
    Size:"18x35xL-2400mm",
  },
  {
    Img: "/images/Gilta/G-27.PNG",
    Title: "G-27",
    Size:"19x40xL-2400mm",
  },
  {
    Img: "/images/Gilta/G-28.PNG",
    Title: "G-28",
    Size:"14x28xL-2400mm",
  },
  {
    Img: "/images/Gilta/G-29.PNG",
    Title: "G-29",
    Size:"13x24xL-2400mm",
  },
  {
    Img: "/images/Gilta/G-30.PNG",
    Title: "G-30",
    Size:"18x35xL-2400mm",
  },
  {
    Img: "/images/Gilta/G-31.PNG",
    Title: "G-31",
    Size:"19x40xL-2400mm",
  },
  {
    Img: "/images/Gilta/G-32.PNG",
    Title: "G-32",
    Size:"20x40xL-2400mm",
  },
  {
    Img: "/images/Gilta/G-33.PNG",
    Title: "G-33",
    Size:"20x43xL-2400mm",
  },
  {
    Img: "/images/Gilta/G-34.PNG",
    Title: "G-34",
    Size:"20x48xL-2400mm",
  },
  {
    Img: "/images/Gilta/G-35.PNG",
    Title: "G-35",
    Size:"20x48xL-2400mm",
  },
  {
    Img: "/images/Gilta/G-36.PNG",
    Title: "G-36",
    Size:"25x61xL-2400mm",
  },
  {
    Img: "/images/Gilta/G-37.PNG",
    Title: "G-37",
    Size:"25x72xL-2400mm",
  },
  {
    Img: "/images/Gilta/G-38.PNG",
    Title: "G-38",
    Size:"14x79xL-2400mm",
  },
  {
    Img: "/images/Gilta/G-39.PNG",
    Title: "G-39",
    Size:"21x80xL-2400mm",
  },
  {
    Img: "/images/Gilta/G-40.PNG",
    Title: "G-40",
    Size:"15x90xL-2400mm",
  },
  {
    Img: "/images/Gilta/G-41.PNG",
    Title: "G-41",
    Size:"10x98xL-2400mm",
  },
  {
    Img: "/images/Gilta/G-42.PNG",
    Title: "G-42",
    Size:"16x120xL-2400mm",
  },
  {
    Img: "/images/Gilta/G-43.PNG",
    Title: "G-43",
    Size:"16x151xL-2400mm",
  },
  {
    Img: "/images/Gilta/G-44.PNG",
    Title: "G-44",
    Size:"",
  },
  {
    Img: "/images/Gilta/G-45.PNG",
    Title: "G-45",
    Size:"",
  },
  {
    Img: "/images/Gilta/G-46.PNG",
    Title: "G-46",
    Size:"",
  },
  {
    Img: "/images/Gilta/G-47.PNG",
    Title: "G-47",
    Size:"",
  },
];
