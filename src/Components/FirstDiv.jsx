import React from "react";
import { Outlet } from "react-router";
import "../App.css";

const FirstDiv = () => {
  return (
    <div className="firstdiv">
      <img src="" alt="" />
      <h1 className="desc">Your place to discuss all things gaming</h1>
      <Outlet /> {/* needs to be here to render the nested(child) routes */}
    </div>
  );
};

export default FirstDiv;
