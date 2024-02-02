import React, { useEffect } from 'react'
import '../App.css'
import { Link } from "react-router-dom"
// import "@fontsource/poppins"; // Defaults to weight 400
import { Geners } from './'
import { SidebarStyled, SidebarStyledLink, SidebarMenuStyled } from './styled/SidebarStyled';
import { Box, Flex } from 'rebass'
import { Stats } from './'
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../state/store"

const Sidebar = () => {
  return (
    <SidebarStyled>
      <SidebarMenuStyled>
        <SidebarStyledLink href='/'>Home</SidebarStyledLink>
        <SidebarStyledLink href='/'>Artists</SidebarStyledLink>
        <SidebarStyledLink href='/'>Albums</SidebarStyledLink>
      </SidebarMenuStyled>
      {/* <Geners /> */}
      <Stats />
    </SidebarStyled>
  )
}

export default Sidebar