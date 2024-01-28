import React from 'react'
import '../App.css'
import { Link } from "react-router-dom"
import "@fontsource/poppins"; // Defaults to weight 400
import { Geners } from './'
import { SidebarStyled, SidebarStyledLink } from './styled/SidebarStyled';
const Sidebar = () => {
  return (
    <SidebarStyled>
      {/* <Link to="/" className='sidebar-text'>Home</Link> */}
      {/* <Link to="/" className='sidebar-text'>Artists</Link> */}
      {/* <Link to="/" className='sidebar-text'>Albums</Link> */}
      <SidebarStyledLink href='/'>Home</SidebarStyledLink>
      <SidebarStyledLink href='/'>Artists</SidebarStyledLink>
      <SidebarStyledLink href='/'>Albums</SidebarStyledLink>
      {/* <Link to="/">Artists</Link>
      <Link to="/">Albums</Link> */}
      <Geners />
    </SidebarStyled>
  )
}

export default Sidebar