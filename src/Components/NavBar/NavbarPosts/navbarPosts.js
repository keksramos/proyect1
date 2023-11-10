import React, { useState } from "react";
import { FaPencilAlt, FaRegBell, FaUser} from "react-icons/fa"

import "../NavbarPosts/navbarPosts.scss";

import smallLogo from "../../../../public/logoWrite.png";

export const NavbarPosts = () => {
  // const [navbar, setNavbar] = useState(false);

  return (
    <nav className="navbarPosts">
      <div>
      <img className="navbar-logo" src={smallLogo} width={60} ></img>
      {/* <form>
      <input>Search</input>
      </form> */}
      </div>
      <div>
        <button className="navbarPostButton" href={"/write"}> <FaPencilAlt size={15}/> Write</button>
        <button className="navbarPostButton"><FaRegBell size={15}/></button>
        <button className="userButton"><FaUser size={15}/></button>
      </div>

    </nav>
  );
};
