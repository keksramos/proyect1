import React from "react";
// import { NavbarPosts } from "../../NavBar/NavbarPosts/navbarPosts";
import { Outlet } from "react-router-dom";

export default function WriteLayout() {
  return (
    <div className="mainLayout">
      <h1>Navbar</h1>
      <div className="mainContent">
        <Outlet />
      </div>
    </div>
  );
}
