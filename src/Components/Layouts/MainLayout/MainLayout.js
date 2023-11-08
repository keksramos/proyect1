import React from "react";
import { Outlet } from "react-router-dom";
import { NavBar } from "../../NavBar/Navbar";
import { CallToAction } from "../../CallToAction/CallToAction";
import TrendingPosts from "../../TrendingPosts/TrendingPosts";
import Post from "../../Post/Post";
import { Discover } from "../../Discover/Discover";

import "./mainLayout.scss";
import "../../TrendingPosts/trendingPosts.scss";
import graphIcon from "../../../../public/trending-medium-graph.svg";

export default function MainLayout() {
  const posts = [
    {
      id: "01",
      title: "Was Rust Worth It? From JavaScript to Rust, three years in.",
      author: "Jarrod Overson",
      creationDate: "Oct 25",
      description:
        "A few years ago, I dropped everything to focus 100% on WebAssembly.",
      coverImage:
        "https://miro.medium.com/v2/resize:fit:4800/format:webp/1*lgWp1uYIo4i4Y62dBBhGvA.png",
      readTime: "6 min read",
      trending: true,
    },
    {
      id: "02",
      title: "Kubernetes And Kernel Panics",
      author: "Kyle Anderson",
      creationDate: "Oct 27",
      description:
        "With a recent effort to reduce customer (engineers, not end users)",
      coverImage:
        "https://miro.medium.com/v2/resize:fill:400:268/0*5hJgvT1vt6PZRMd3",
      readTime: "6 min read",
      trending: true,
    },
    {
      id: "03",
      title: "A personal, non-partisan perspective on the Israel-Hamas war.",
      author: "Isaac Saul",
      creationDate: "Oct 12",
      description:
        "People ask me all the time if I am “pro-Israel” because I am a Jew who has lived in Israel.",
      coverImage:
        "https://miro.medium.com/v2/resize:fill:400:268/1*IraA41cyapCYG2vMH2Tvxw.png",
      readTime: "6 min read",
      trending: true,
    },
    {
      id: "04",
      title: "TimeGPT: The First Foundation Model for Time Series Forecasting",
      author: "Marco Peixeiro",
      creationDate: "Oct 24",
      description:
        "The field of time series forecasting is going through a very exciting period.",
      coverImage:
        "https://miro.medium.com/v2/resize:fill:400:268/1*2RRtiHusrykTmfM7FcUffw.jpeg",
      readTime: "6 min read",
      trending: true,
    },
    {
      id: "05",
      title: "My Husband Could Never Find Out.",
      author: "Claire Franky",
      creationDate: "Oct 26",
      description:
        "I’d set my alarm an hour early, showered, styled my hair, and applied makeup while trying to stay calm.",
      coverImage:
        "https://miro.medium.com/v2/resize:fill:400:268/0*dZJ-oQFBgymsAleq",
      readTime: "6 min read",
      trending: true,
    },
    {
      id: "06",
      title: "How I scaled Amazon’s Load Generator to run on 1000s of machines",
      author: "Carlos Arguelles",
      creationDate: "Oct 21",
      description: "Moving from a single-host process to a distributed system",
      coverImage:
        "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*lgWp1uYIo4i4Y62dBBhGvA.png",
      readTime: "10 min read",
      trending: true,
    },
    {
      id: "07",
      title: "Sheet, dialog, or snackbar — what should a designer go for?",
      author: "Ksenia Toloknova",
      creationDate: "Oct 25",
      description:
        "When crafting mobile app interfaces, designers continually encounter the necessity to make decisions.",
      coverImage:
        "https://miro.medium.com/v2/resize:fill:400:268/1*VbCkG39Xi9-yQF8rRUVJWQ.jpeg",
      readTime: "6 min read",
      trending: false,
    },
    {
      id: "08",
      title: "18 Life Lessons I’d Give My 18-Year-Old Self",
      author: "Scott H. Young",
      creationDate: "Oct 25",
      description:
        "I started writing my blog when I was a few months shy of 18 years old.",
      coverImage:
        "https://miro.medium.com/v2/resize:fit:1400/format:webp/0*aaUaft0AxPSZuCNb.jpg",
      readTime: "5 min read",
      trending: false,
    },
  ];
  return (
    <div className="mainLayout">
      <NavBar />
      {/* <div className="mainContent">
                <Outlet />
            </div> */}
      <div className="callToActionContent">
        <CallToAction />
      </div>
      <section className="trendingContent">
        <div className="TrendingTitle">
          <img src={graphIcon} width={23}></img>
          <p className="titleTrending"> Trending Medium</p>
        </div>
        <div className="trendingPostsContent">
          {posts.map((post, index) => {
            if (post.trending == true) {
              return (
                <TrendingPosts
                  key={index}
                  id={post.id}
                  title={post.title}
                  author={post.author}
                  creationDate={post.creationDate}
                  description={post.description}
                  readTime={post.readTime}
                />
              );
            }
          })}
        </div>
      </section>
      <section className="Content-Body">
        <div className="postsContent">
          {posts.map((post, index) => {
            return (
              <Post
                key={index}
                id={post.id}
                title={post.title}
                author={post.author}
                creationDate={post.creationDate}
                description={post.description}
                readTime={post.readTime}
                coverImage={post.coverImage}
              />
            );
          })}
        </div>
        <aside className="Discover">
          <Discover />
        </aside>
      </section>
    </div>
  );
}
