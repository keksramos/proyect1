import React, { createContext, useEffect, useState } from "react";

import "./App.css";
import MainLayout from '../Layouts/MainLayout/MainLayout'
import WriteLayout from "../Layouts/WriteLayout/writeLayout";
import Home from '../../Pages/Home/Home'
import Write from "../../Pages/Write/Write";

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
      </Routes>
    </BrowserRouter>
  )
}

export default App;