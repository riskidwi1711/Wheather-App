import React from "react";
import Header from "./Content/Header";
import Main from "./Content/Main";

function Content(props) {
  return (
    <div className="flex flex-col ">
      <Header />
      <Main />
    </div>
  );
}

export default Content;
