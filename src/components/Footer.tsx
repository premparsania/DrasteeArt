import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className="bg-[#0d0c0cb5] text-[#c9c6c6] pt-5">
        <div className="max-w-screen-lg px-4 sm:px-6 sm:grid md:grid-cols-1 sm:grid-cols-1 mx-auto text-center">
          <div className="p-5">
            <div className="text-sm uppercase text-[#aaaaaa]">
              Category
            </div>
            <div className="my-3 flex justify-between items-center">
              <Link className="my-3 font-medium text-xs hover:text-black" to="/Border">
                DECORATIVE BORDER
              </Link>
              <Link className="my-3 font-medium text-xs hover:text-black" to="/Columm">
                DECORATIVE COLUMNS
              </Link>
              <Link className="my-3 font-medium text-xs hover:text-black" to="/CornerDesign">
                DECORATIVE CORNER AND BORDERS
              </Link>
              <Link className="my-3 font-medium text-xs hover:text-black" to="/Gilta">
                DECORATIVE GILTA
              </Link>
              <Link className="my-3 font-medium text-xs hover:text-black" to="/HandDesign">
                DECORATIVE CEILING AND OTHER DESIGNS
              </Link>
            </div>
          </div>
          <hr className="opacity-30" />
          <div className="p-5">
            <div className="text-sm uppercase text-[#aaaaaa]">
              Contact us
            </div>
            <a className="my-3 block" href="/#">
              Drastee Art Zone 80 Feet Road, Near Sardar Patel Arogya Bhavan,
              <br/>Kothariya Road, Rajkot - 360002. Gujarat (INDIA)
              <span className="text-teal-600 text-xs p-1"></span>
            </a>
            {/* <a className="my-3 block" href="/#">
              contact@company.com{" "}
              <span className="text-teal-600 text-xs p-1"></span>
            </a> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
