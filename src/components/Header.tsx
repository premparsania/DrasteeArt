import react from "react";
import { DAZ_LOGO } from "../assets";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
    {/* bg-[#262626] */}
      <header className="fixed top-0 w-full z-10 shadow-md text-[#262626] nav">
        <div className="flex justify-between items-center h-[80px] w-full xl:px-20 lg:px-16 md:px-10 px-20">
          <Link to="/">
            <img src={DAZ_LOGO} alt="logo" className="w-14" />
          </Link>
          <div>+1234456678</div>
        </div>
      </header>
    </>
  );
}

export default Header;
