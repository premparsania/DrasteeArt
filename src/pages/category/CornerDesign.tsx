import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Footer } from "../../components";

function CornerDesign() {
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
                Corner Design
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

export default CornerDesign;

const BorderData = [
  {
    Img: "/images/Corner Design/CD-1.PNG",
    Title: "CD-1",
    Size:"200x260mm"
  },
  {
    Img: "/images/Corner Design/CD-2.PNG",
    Title: "CD-2",
    Size:"317x317mm"
  },
  {
    Img: "/images/Corner Design/CD-3.PNG",
    Title: "CD-3",
    Size:"317x317mm"
  },
  {
    Img: "/images/Corner Design/CD-4.PNG",
    Title: "CD-4",
    Size:"250x250mm"
  },
  {
    Img: "/images/Corner Design/CD-5.PNG",
    Title: "CD-5",
    Size:"250x130mm"
  },
  {
    Img: "/images/Corner Design/CD-6.PNG",
    Title: "CD-6",
    Size:"203x203mm"
  },
  {
    Img: "/images/Corner Design/CD-7.PNG",
    Title: "CD-7",
    Size:"170x170mm"
  },
  {
    Img: "/images/Corner Design/CD-8.PNG",
    Title: "CD-8",
    Size:"462x420x40mm"
  },
  {
    Img: "/images/Corner Design/CD-9.PNG",
    Title: "CD-9",
    Size:"150x150mm"
  },
  {
    Img: "/images/Corner Design/CD-10.PNG",
    Title: "CD-10",
    Size:"230x230x40mm"
  },
  {
    Img: "/images/Corner Design/CD-11.PNG",
    Title: "CD-11",
    Size:"250x250mm"
  },
  {
    Img: "/images/Corner Design/CD-12.PNG",
    Title: "CD-12",
    Size:"317x317mm"
  },
  {
    Img: "/images/Corner Design/CD-13.PNG",
    Title: "CD-13",
    Size:"318x318mm"
  },
  {
    Img: "/images/Corner Design/CD-14.PNG",
    Title: "CD-14",
    Size:"250x250mm"
  },
];
