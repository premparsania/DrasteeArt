import react from "react";
import { DAZ_LOGO } from "../assets";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
    {/* bg-[#262626] */}
      <header className="fixed top-0 w-full z-10 shadow-md text-[#fff] bg-[#0d0c0cb5]">
        <div className="flex justify-between items-center h-[80px] w-full xl:px-20 lg:px-16 md:px-10 ">
          <Link to="/">
            <img src={DAZ_LOGO} alt="logo" className="w-16" />
          </Link>
          <div className="underline">+91 99788 55255</div>
        </div>
      </header>
    </>
  );
}

export default Header;
