import React from "react";
import { FaHeart, FaHome, FaHotTub } from "react-icons/fa";
import { Logo } from "../Assets";
import SidebarButton from "./Button/SidebarButton";

function Sidebar(props) {
  return (
    <div className="flex flex-col justify-start items-center py-24">
      <div id="logo" className="mb-8">
        <img src={Logo} alt="" />
      </div>
      <div id="menu" className="flex flex-col overflow overflow-x-hidden gap-2">
        <SidebarButton Icon={<FaHome color="white"/>} Color="bg-yellow-500" />
        <SidebarButton Icon={<FaHeart color="white"/>} Color="bg-gray-500" />
        <SidebarButton Icon={<FaHotTub color="white"/>} Color="bg-gray-500" />
      </div>
    </div>
  );
}

export default Sidebar;
