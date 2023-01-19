import React from "react";
import icons from "../untils/icons";
import Search from "./Search";

const { BsArrowLeft, BsArrowRight, BiUserCircle } = icons;

const Header = () => {
  return (
    <div className="flex justify-between w-full">
      <div className="flex gap-6 w-full items-center">
        <div className="flex text-gray-400 font-light gap-6">
          <span>
            <BsArrowLeft size={23} />
          </span>
          <span>
            <BsArrowRight size={23} />
          </span>
        </div>
        <div className="w-1/2">
          <Search />
        </div>
      </div>
      <div className="text-gray-400 font-light">
        <span>
          <BiUserCircle size={23} />
        </span>
      </div>
    </div>
  );
};

export default Header;
