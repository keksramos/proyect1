// import React, { Component } from "react";
// import { MenuItems } from "./MenuItems";

import React, { useState } from "react";
import "../NavbarPosts/navbarPosts.scss";

import logo from "../../../public/logo.svg";

export const NavBar = () => {
  const [navbar, setNavbar] = useState(false);

  return (
    <nav className="navbarPosts">
      <img className="navbar-logo" src={logo} width={150}></img>
      <div>
        <button>Write</button>
        <button className="signUpButton">Sign Up</button>
        <button>Sign In</button>
      </div>

    </nav>
  );
};
