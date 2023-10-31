import React from "react";
import "./navbar.scss"


export const Navbar = () => {
    return (
        <header>
            <h3>Logo</h3>
            <nav>
                <a href="/#">Our story</a>
                <a href="/#">Membership</a>
                <a href="/#">Write</a>
                <a href="/#">Sign In</a>
                <button>Get started</button>
            </nav>
        </header>
    )
}