import React from 'react'
import { GenereStyled } from './styled/GenereStyled'

interface GenereProps {
  genere: string
}

const Genere: React.FC<GenereProps> = ({genere}) => {
  return (
    <GenereStyled>
      {genere}
    </GenereStyled>
  )
}

export default Genere