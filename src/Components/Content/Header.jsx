import React from "react";
import { FaBell, FaSearch } from "react-icons/fa";
import { Profile } from "../../Assets";

function Header(props) {
  return (
    <div className="py-8 px-6">
      <div className="flex justify-between items-center gap-3">
        <div className="flex items-center gap-3">
          <div
            style={{ height: 73 + "px", width: 73 + "px" }}
            className="rounded-full bg-blue-500"
          >
            <img src={Profile} alt="" />
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-normal text-xl">Hello,</p>
            <p className="font-bold text-2xl ">Riski Dwi Patrio</p>
          </div>
        </div>
        <div className="flex gap-2">
          <div className="flex p-3 gap-2 items-center rounded-md" style={{backgroundColor: '#F6F6F6'}}>
            <input type="text" name="" id=""  style={{backgroundColor: '#F6F6F6'}}/>
            <a href="">
              <FaSearch color="black"/>
            </a>
          </div>
          <div className="rounded-md p-4" style={{backgroundColor: '#F6F6F6'}}>
            <FaBell/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
