import React, { createContext, useEffect, useState } from "react";

import "./App.css";
import MainLayout from '../Layouts/MainLayout/MainLayout'
import WriteLayout from "../Layouts/WriteLayout/writeLayout";
import PostLayout from "../Layouts/PostLayout/PostLayout";
import Home from '../../Pages/Home/Home'
import Write from "../../Pages/Write/Write";
import PostView from "../Post/View/view";

import { BrowserRouter, Route, Routes } from "react-router-dom";

export const MediumContext = React.createContext()

function App(){
  
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />}/>
          </Route>
          <Route path="/write" element={<WriteLayout />}>
            <Route index element={<Write />}/>
          </Route>
          <Route path="/view" element={<PostLayout />}>
            <Route path=":id" element={<PostView/>}/>
            <Route index element={<Write />}/>
          </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;