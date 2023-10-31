import React, {useState} from "react";
import "./navbar.scss"

// // import logo from "./public/logo.svg"


export const Navbar = () => {

    const [navbar, setNavbar] = useState(false);

    const showNavBar = () => {
        navref.current.classList.toggle("responsive_nav")
    }

    const changeBackground = () => {
        if(window.scrollY >= 80) {
            setNavbar(true)
        } else{
            setNavbar(false)
        }
    }

    window.addEventListener('scroll', changeBackground)

    return (
        <header>
            <nav className="navbar active">
                <h2>Logo</h2>
                {/* <img src={logo}></img> */}
                <div className="navLinks">
                    <a href="/#">Our story</a>
                    <a href="/#">Membership</a>
                    <a href="/#">Write</a>
                    <a href="/#">Sign In</a>
                    <button className="navButton">Get started</button>
                </div>
            </nav>
        </header>
    )
}