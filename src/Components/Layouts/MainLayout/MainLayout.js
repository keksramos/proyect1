import React, {useState, useEffect} from "react";
import { Outlet } from "react-router-dom";
import { NavBar } from "../../NavBar/Navbar";
import { CallToAction } from "../../CallToAction/CallToAction";
import TrendingPosts from "../../TrendingPosts/TrendingPosts";
import { Discover } from "../../Discover/Discover";

import "./mainLayout.scss";
import "../../TrendingPosts/trendingPosts.scss";
import graphIcon from "../../../../public/trending-medium-graph.svg";

export default function MainLayout() {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch("http://localhost:5001/posts")
      const data = await response.json();

      setPosts(data)
    }
    fetchPosts()
  }) 
  
  return (
    <div className="mainLayout">
      <NavBar />
      <div className="callToActionContent">
        <CallToAction />
      </div>

      <section className="trendingContent">
        <div className="TrendingTitle">
          <img src={graphIcon} width={23}></img>
          <p className="titleTrending"> Trending Medium</p>
        </div>
        <div className="TrendingPosts__container">
          <TrendingPosts />
        </div>
      </section>
      <section className="Content-Body">
          <div className="mainContent">
            <Outlet />
        </div>
        <aside className="Discover">
          <Discover />
        </aside>
      </section>
    </div>
  );
}
