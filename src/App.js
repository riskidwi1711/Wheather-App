import React from "react";
import Content from "./Components/Content";
import Sidebar from "./Components/Sidebar";

function App(props) {
  return (
    <div className="flex h-full" style={{ backgroundColor: "#FFFFFF" }}>
      <div className="w-32 ">
        <Sidebar />
      </div>
      <div className="w-full">
        <Content />
      </div>
      <div
        style={{ backgroundColor: "#F7F7F7" }}
        className="bg-yellow-700 w-1/3"
      ></div>
    </div>
  );
}

export default App;
