import React, {useRef} from "react";
import "./navbar.scss"


export const Navbar = () => {
    const navref = useRef()

    const showNavBar = () => {
        navref.current.classList.toggle("responsive_nav")
    }

    return (
        <header>
            <h3>Logo</h3>
            <nav ref={navref}>
                <a href="/#">Our story</a>
                <a href="/#">Membership</a>
                <a href="/#">Write</a>
                <a href="/#">Sign In</a>
                <button className="navButton">Get started</button>
            </nav>
        </header>
    )
}