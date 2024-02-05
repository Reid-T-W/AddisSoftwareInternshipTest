import React from 'react'
import { FooterStyled } from './styled/FooterStyled'

/**
 * Footer Component, contains footer contents
 * 
 * @component
 * 
 * @returns {JSX.Element} The rendered component
 */
export const Footer = () => {
  return (
    <FooterStyled>
      <p>&copy; 2024 music-app. All rights reserved.</p>
    </FooterStyled>
  )
}

export default Footer