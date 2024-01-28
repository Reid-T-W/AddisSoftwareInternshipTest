import React from 'react'
import { Search } from './'
import '../App.css'
import { NavbarStyled } from './styled/NavbarStyled'
import { LogoStyled } from './styled/LogoStyled'

const Navbar = () => {
  return (
    // <div className='navbar navbar-text'>
    <NavbarStyled>
      {/* <div className='logo'>Logo</div> */}
      <LogoStyled>
        Logo
      </LogoStyled>
      <Search />
    </NavbarStyled>
  )
}

export default Navbar