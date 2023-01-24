import React from "react";
import logo from "../assets/logo/logo.svg";
import { sidebarMenu } from "../untils/menu";
import { NavLink } from "react-router-dom";

const notActiveStyle =
  "py-2 px-[25px] font-bold flex items-center text-[#32323D] font-sans";
const activeStyle =
  "py-2 px-[25px] font-bold flex items-center text-[#0F7070] font-sans";

const SidebarLeft = () => {
  return (
    <div className="flex h-full flex-col bg-main-200">
      <div className="w-full h-[70px] py-[15px] px-[25px] flex justify-start items-center">
        <img src={logo} alt="logo" className="w-[120px] h-[40px]" />
      </div>
      <div className="flex flex-col text-[13px]">
        {sidebarMenu.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            end={item.end}
            className={({ isActive }) =>
              isActive ? activeStyle : notActiveStyle
            }
          >
            <div className="mr-[10px]">{item.icons}</div>
            <span>{item.text}</span>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default SidebarLeft;
