// import React, { Component } from "react";
// import { MenuItems } from "./MenuItems";

import React, { useState } from "react";
import "../NavbarPosts/navbarPosts.scss";

import smallLogo from "../../../public/logoWrite.png";

export const NavbarPosts = () => {
  // const [navbar, setNavbar] = useState(false);

  return (
    <nav className="navbarPosts">
      <img className="navbar-logo" src={smallLogo} width={150}></img>
      <div>
        <button>Write</button>
        <button>Notification</button>
      </div>

    </nav>
  );
};
