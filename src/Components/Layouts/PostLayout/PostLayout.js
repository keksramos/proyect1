import React from "react";
import { Outlet } from "react-router-dom";
import { NavbarPosts } from "../../NavBar/NavbarPosts/navbarPosts";
import Footer from "../../Footer/Footer";

export default function ViewLayout(){
    return(
        <div className="postLayout">
            <NavbarPosts />
            <div className="viewLayout">
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}