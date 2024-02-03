import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Body, 
         Navbar, 
         Sidebar, 
         Footer, 
         Songs, 
         Albums, 
         Artists, 
         Geners } from './components'
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Body Component={Songs}/>} />
          <Route path="/albums" element={<Body Component={Albums}/>} />
          <Route path="/artists" element={<Body Component={Artists}/>} />
          <Route path="/generes" element={<Body Component={Geners}/>} />
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
