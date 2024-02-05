import React, { useEffect } from 'react'
import { Link } from "react-router-dom"
// import "@fontsource/poppins"; // Defaults to weight 400
import { Geners } from '..'
import { SidebarStyled, SidebarStyledLink, SidebarMenuStyled } from '../styled/SidebarStyled';
import { Box, Flex } from 'rebass'
import { Stats } from '..'
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../state/store"
import * as ROUTES from "../../constants/routes"

/**
 * Sidebar Component, displays the sidebar menu 
 * and also renders the Stats component
 * 
 * @component
 * 
 * @returns {JSX.Element} The rendered component
 */
export const Sidebar = () => {
  return (
    <SidebarStyled>
      <SidebarMenuStyled>
        <SidebarStyledLink href={ROUTES.SONGS}>Songs</SidebarStyledLink>
        <SidebarStyledLink href={ROUTES.ARTISTS}>Artists</SidebarStyledLink>
        <SidebarStyledLink href={ROUTES.ALBUMS}>Albums</SidebarStyledLink>
        <SidebarStyledLink href={ROUTES.GENRES}>Genres</SidebarStyledLink>
      </SidebarMenuStyled>
      <Stats />
    </SidebarStyled>
  )
}

export default Sidebar