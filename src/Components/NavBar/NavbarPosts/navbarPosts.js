import React from "react";
import { FaPencilAlt, FaRegBell, FaUser} from "react-icons/fa"
import { Link } from 'react-router-dom'

import "../NavbarPosts/navbarPosts.scss";

import smallLogo from "../../../../public/logoWrite.png";

export const NavbarPosts = () => {

  return (
    <nav className="navbarPosts">
      <div className="leftSectionNavbar">
        <Link to='/'><img className="navbar-logo" src={smallLogo} width={60}></img></Link>
        <input className="searchInNavBar" type="text" placeholder="Search"></input>
      </div>
      <div className="rightSectionNavbar">
        <Link className="navbarPostButton" to='/write'><FaPencilAlt size={15}/>Write</Link>
        {/* <button className="navbarPostButton" id="writeButton" href={"http://localhost:3000/write"}> <FaPencilAlt size={15}/> Write</button> */}
        <button className="navbarNotification"><FaRegBell size={15}/></button>
        <button className="userButton">
          <FaUser className="userIcon" size={15}/>
          </button>
      </div>

    </nav>
  );
};
