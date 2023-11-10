import React from "react";
import { Outlet } from "react-router-dom";
import "./writeLayout.scss"
import { NavbarPosts } from "../../NavBar/NavbarPosts/navbarPosts";

export default function WriteLayout() {
  return (
    <div className="writeLayout">
      < NavbarPosts/>
      <div className="mainContent">
        <Outlet />
      </div>
    </div>
  );
}
