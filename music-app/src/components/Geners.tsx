import React from 'react'
import '../App.css'
import { GenersStyled } from './styled/GenersStyled'
import { Genere } from './'

const Geners = () => {
  const generes: string[] = ['genere1', 'genere2', 'genere3', 'genere4', 'genere5', 
                             'genere1', 'genere2', 'genere3', 'genere4', 'genere5']
  return (
    <GenersStyled>
      {generes.map((genere: string) => (
        <Genere genere={genere}/>
      ))}
    </GenersStyled>

  )
}

export default Geners