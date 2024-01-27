import React from 'react'
import { Search } from './'
import '../App.css'
const Navbar = () => {
  return (
    <div className='navbar navbar-text'>
      <div className='logo'>Logo</div>
      <Search />
    </div>
  )
}

export default Navbar