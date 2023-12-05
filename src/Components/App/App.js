import React from "react";

import "./App.css";
import MainLayout from '../Layouts/MainLayout/MainLayout'
import ViewLayout from '../Layouts/PostLayout/PostLayout'
import WriteLayout from '../Layouts/WriteLayout/WriteLayout'
import Home from '../../Pages/Home/Home'
import Write from "../../Pages/Post/create/Write";
import PostView from "../../Pages/Post/View/view";


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
          <Route path="/post" element={<ViewLayout />}>
            <Route path=":id" element={<PostView />}/>
          </Route>
          
      </Routes>
    </BrowserRouter>
  )
}

export default App;