 // import React, { Component } from "react";
import { MenuItems } from "./MenuItems";

import React, { useState } from "react";
import "./navbar.scss";

import logo from "../../../public/logo.svg";

export const NavBar = () => {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 400) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <nav className={navbar ? 'NavbarItems active' : 'NavbarItems'}>
      <img className="navbar-logo" src={logo} width={150}></img>
      <ul className="menu-list">
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <a className={item.cName} href={item.url}>
                {item.title}
              </a>
            </li>
          );
        })}
        <button className={navbar ? 'navButton active' : 'navButton'}>Get Started</button>
      </ul>
    </nav>
  );
};
