import React from "react";
import { Outlet } from "react-router-dom";
import { NavbarPosts } from "../../NavBar/NavbarPosts/navbarPosts";
import {Footer} from "../../Footer/Footer";

export default function ViewLayout(){
    <div className="viewLayout">
        <NavbarPosts />
        <div className="viewContent">
            <Outlet />
        </div>
        <Footer />
    </div>
}