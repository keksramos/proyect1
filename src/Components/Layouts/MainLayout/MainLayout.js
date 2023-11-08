import React from "react";
import { Outlet } from "react-router-dom";
import { NavBar } from "../../NavBar/Navbar";
import { CallToAction } from "../../CallToAction/CallToAction";
import TrendingPosts from "../../TrendingPosts/TrendingPosts";
import Post from "../../Post/Post";

export default function MainLayout(){
    return(
        <div className="mainLayout">
            <NavBar />
            {/* <div className="mainContent">
                <Outlet />
            </div> */}
            <div className="callToActionContent">
                <CallToAction />
            </div>
            <div className="trendingPostsContent">
                <TrendingPosts />
            </div>
            <div className="postsContent">
                <Post />
            </div>
        </div>
    )
}