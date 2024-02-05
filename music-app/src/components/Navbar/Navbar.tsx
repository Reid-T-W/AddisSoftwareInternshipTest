import React from 'react'
import { Search } from '..'
import { NavbarStyled } from '../styled/NavbarStyled'
import { LogoStyled } from '../styled/LogoStyled'

/**
 * Navbar Component, includes the logo and also renders
 * the Search Component
 * 
 * @component
 * 
 * @returns {JSX.Element} The rendered component
 */
export const Navbar = () => {
  return (
    <NavbarStyled>
      <LogoStyled>
        music-app
      </LogoStyled>
      <Search />
    </NavbarStyled>
  )
}

export default Navbar