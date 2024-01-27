import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Body, Navbar, Sidebar, Footer } from './components'
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Body/>} />
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
