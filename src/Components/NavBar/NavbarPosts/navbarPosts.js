import React from "react";
import { FaPencilAlt, FaRegBell, FaUser} from "react-icons/fa"

import "../NavbarPosts/navbarPosts.scss";

import smallLogo from "../../../../public/logoWrite.png";

export const NavbarPosts = () => {

  return (
    <nav className="navbarPosts">
      <div className="leftSectionNavbar">
      <img className="navbar-logo" src={smallLogo} width={60} href={"/"}></img>
      <input className="searchInNavBar" type="text" placeholder="Search"></input>
      </div>
      <div className="rightSectionNavbar">
        <button className="navbarPostButton" href={"/write"}> <FaPencilAlt size={15}/> Write</button>
        <button className="navbarPostButton"><FaRegBell size={15}/></button>
        <button className="userButton"><FaUser size={15}/></button>
      </div>

    </nav>
  );
};
