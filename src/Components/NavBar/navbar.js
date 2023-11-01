import React, { Component } from "react";
import { MenuItems } from "./MenuItems";

// import React, {useState} from "react";
import "./navbar.scss";

import logo from "../../../public/logo.svg";

export const NavBar = () => {

    // const [navbar, setNavbar] = useState(false);

    // const changeBackground = () => {
    //     if(window.scrollY >= 80) {
    //         setNavbar(true)
    //     } else{
    //         setNavbar(false)
    //     }
    // }
    
  return (
    <nav className="NavbarItems">
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
        <button className="navButton">Get Started</button>
      </ul>
    </nav>
  );
};
// export const Navbar = () => {



//     window.addEventListener('scroll', changeBackground)

//     return (
//         <header>
//             <nav className="navbar active">
//                 <img src={logo} width={150}></img>
//                 <div className="navLinks">
//                     <a href="/#">Our story</a>
//                     <a href="/#">Membership</a>
//                     <a href="/#">Write</a>
//                     <a href="/#">Sign In</a>
//                     <button className="navButton">Get started</button>
//                 </div>
//             </nav>
//         </header>
//     )
// }
