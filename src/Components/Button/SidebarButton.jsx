import React from "react";

function SidebarButton({ Icon, Color }) {
  return (
    <a href="">
      <div
        style={{ width: 40 + "px", height: 40 + "px" }}
        className={`${Color} rounded-full flex items-center justify-center p-0`}
      >
        {Icon}
      </div>
    </a>
  );
}

export default SidebarButton;
