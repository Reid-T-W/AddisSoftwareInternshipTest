import React from 'react'
import '../App.css'
import { Link } from "react-router-dom"
import "@fontsource/poppins"; // Defaults to weight 400
import { Geners } from './'
const Sidebar = () => {
  return (
    <div className='sidebar-box'>
      <Link to="/" className='sidebar-text'>Home</Link>
      <Link to="/" className='sidebar-text'>Artists</Link>
      <Link to="/" className='sidebar-text'>Albums</Link>
      <Geners />
    </div>
  )
}

export default Sidebar