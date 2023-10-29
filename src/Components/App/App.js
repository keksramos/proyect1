import React from 'react';

import logo from './logo.svg';
import './App.css';
import Post from '../Post/Post'

function App() {
  const posts = [
    {
      id:"01",
      title:"Was Rust Worth It? From JavaScript to Rust, three years in.", 
      author:"Jarrod Overson", 
      creationDate:"10-25-2023", 
      description:"A few years ago, I dropped everything to focus 100% on WebAssembly. At the time, Rust had the best support for compiling into WebAssembly, and the most full-featured WebAssembly runtimes were Rust-based. Rust was the best option on the menu. I jumped in, eager to see what all the hype was about.",
    },
    {
      id:"02",
      title:"Kubernetes And Kernel Panics", 
      author:"Kyle Anderson", 
      creationDate:"10-27-2023", 
      description:"With a recent effort to reduce customer (engineers, not end users) pain on our container platform Titus, I started investigating “orphaned” pods. There are pods that never got to finish and had to be garbage collected with no real satisfactory final status. Our Service job (think ReplicatSet) owners don’t care too much, but our Batch users care a lot. Without a real return code, how can they know if it is safe to retry or not?",
    },
    {
      id:"03",
      title:"A personal, non-partisan perspective on the Israel-Hamas war. To understand this war, we must understand the thousand-year history that led us here", 
      author:"Isaac Saul", 
      creationDate:"10-12-2023", 
      description:"People ask me all the time if I am “pro-Israel” because I am a Jew who has lived in Israel, and my answer is that being “pro-Israel” or being “pro-Palestine” or being a “Zionist” does not properly capture the nuance of thought most people do or should have about this issue. It certainly doesn’t capture mine.",
    },
    {
      id:"04",
      title:"TimeGPT: The First Foundation Model for Time Series Forecasting", 
      author:"Marco Peixeiro", 
      creationDate:"10-24-2023", 
      description:"The field of time series forecasting is going through a very exciting period. In only the last three years, we have seen many important contributions, like N-BEATS, N-HiTS, PatchTST and TimesNet.",
    },
    {
      id:"05",
      title:"My Husband Could Never Find Out. He would have been furious if he’d known where I had been", 
      author:"Claire Franky", 
      creationDate:"10-26-2023", 
      description:"I’d set my alarm an hour early, showered, styled my hair, and applied makeup while trying to stay calm. I then woke my eight-month-old daughter and fed and clothed her.",
    },
    {
      id:"06",
      title:"Sheet, dialog, or snackbar — what should a designer go for? Identifying established patterns in the market.", 
      author:"Ksenia Toloknova", 
      creationDate:"10-25-2023", 
      description:"When crafting mobile app interfaces, designers continually encounter the necessity to make decisions. There are numerous ways to convey the same information to users. At times, designers find it challenging to determine which element is most fitting for accomplishing their goals. For instance, how should the information be presented within a given scenario? Should it open on a new screen, a sheet or dialog, or maybe a snackbar? If a designer goes with a sheet, they face a new question — which closing mechanism to choose, a close button or a swipe gesture?",
    },
  ]
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Post/>
      </header>
    </div>
  );
}

export default App;
