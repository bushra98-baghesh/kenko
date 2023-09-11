import React from "react";
import Logo from "../../assets/3.png";
import Logo1 from "../../assets/2.png";
import Logo2 from "../../assets/1.png";
function Header() {
  return (
    <div className="flex items-center justify-between px-4 py-4 relative">
      <img
        src={Logo1}
        alt=""
        className=" w-16 md:w-20 lg:w-24 -rotate-12 opacity-60 mx-auto"
      />
      <img src={Logo} alt="" className=" w-32 md:w-36 lg:w-40 mx-auto" />
      <img
        src={Logo2}
        alt=""
        className="w-16 md:w-20 lg:w-24 mx-auto rotate-12 right-0 opacity-60 "
      />
    </div>
  );
}

export default Header;
