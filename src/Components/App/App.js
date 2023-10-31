import React from 'react';

import logo from '../../logo.svg';
import './App.css';
import Post from '../Post/Post'
import { Navbar } from '../NavBar/navbar';
import { CallToAction } from '../CallToAction/CallToAction';
import TrendingPosts from '../TrendingPosts/TrendingPosts'

function App() {
  const posts = [
    {
      id: 1,
      title:"Was Rust Worth It? From JavaScript to Rust, three years in.", 
      author:"Jarrod Overson", 
      creationDate:"Oct 25", 
      description:"A few years ago, I dropped everything to focus 100% on WebAssembly.",
      coverImage: "https://miro.medium.com/v2/resize:fit:4800/format:webp/1*lgWp1uYIo4i4Y62dBBhGvA.png",
      readTime: "6 min read"
    },
    {
      id:2,
      title:"Kubernetes And Kernel Panics", 
      author:"Kyle Anderson", 
      creationDate:"Oct 27", 
      description:"With a recent effort to reduce customer (engineers, not end users)",
      coverImage: "https://miro.medium.com/v2/resize:fill:400:268/0*5hJgvT1vt6PZRMd3",
      readTime: "6 min read"
    },
    {
      id:3,
      title:"A personal, non-partisan perspective on the Israel-Hamas war.", 
      author:"Isaac Saul", 
      creationDate:"Oct 12", 
      description:"People ask me all the time if I am “pro-Israel” because I am a Jew who has lived in Israel.",
      coverImage: "https://miro.medium.com/v2/resize:fill:400:268/1*IraA41cyapCYG2vMH2Tvxw.png",
      readTime: "6 min read"
    },
    {
      id: 4,
      title:"TimeGPT: The First Foundation Model for Time Series Forecasting", 
      author:"Marco Peixeiro", 
      creationDate:"Oct 24", 
      description:"The field of time series forecasting is going through a very exciting period.",
      coverImage: "https://miro.medium.com/v2/resize:fill:400:268/1*2RRtiHusrykTmfM7FcUffw.jpeg",
      readTime: "6 min read"
    },
    {
      id:5,
      title:"My Husband Could Never Find Out.", 
      author:"Claire Franky", 
      creationDate:"Oct 26", 
      description:"I’d set my alarm an hour early, showered, styled my hair, and applied makeup while trying to stay calm.",
      coverImage: "https://miro.medium.com/v2/resize:fill:400:268/0*dZJ-oQFBgymsAleq",
      readTime: "6 min read"
    },
    {
      id:6,
      title:"Sheet, dialog, or snackbar — what should a designer go for?", 
      author:"Ksenia Toloknova", 
      creationDate:"Oct 25", 
      description:"When crafting mobile app interfaces, designers continually encounter the necessity to make decisions.",
      coverImage:"https://miro.medium.com/v2/resize:fill:400:268/1*VbCkG39Xi9-yQF8rRUVJWQ.jpeg",
      readTime: "6 min read"
    },
  ]
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
         <CallToAction />
         {
          posts.map((post, index ) => {
            return <TrendingPosts key={index} id={post.id} title={post.title} author={post.author} creationDate={post.creationDate} description={post.description} readTime={post.readTime}/>
          })
         }
        {
          posts.map((post, index) => {
            return <Post key={index} id={post.id} title={post.title} author={post.author} creationDate={post.creationDate} description={post.description} readTime={post.readTime}/>
          })
        }
      </header>
    </div>
  );
}

export default App;
