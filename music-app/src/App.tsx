import React from 'react';
import logo from './logo.svg';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Body, 
         Navbar, 
         Sidebar, 
         Footer, 
         Songs, 
         Albums, 
         Artists, 
         Geners } from './components'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import * as ROUTES from "../src/constants/routes"

function App() {
  return (
    <div>
      <ToastContainer
        closeOnClick/>
      <BrowserRouter>
        <Routes>
          <Route path={ROUTES.SONGS} element={<Body Component={Songs}/>} />
          <Route path={ROUTES.ALBUMS} element={<Body Component={Albums}/>} />
          <Route path={ROUTES.ARTISTS} element={<Body Component={Artists}/>} />
          <Route path={ROUTES.GENRES} element={<Body Component={Geners}/>} />
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
