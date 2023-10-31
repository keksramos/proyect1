import React, {useRef} from "react";
import "./navbar.scss"

// import logo from "./logo.svg"


export const Navbar = () => {
    const navref = useRef()

    const showNavBar = () => {
        navref.current.classList.toggle("responsive_nav")
    }

    return (
        <header>
            <nav ref={navref}>
                <h2>Logo</h2>
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