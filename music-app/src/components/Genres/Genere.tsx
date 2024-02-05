import React from 'react'
import { GenereStyled } from '../styled/GenereStyled'
import { RowStyled } from '../styled/RowStyled';
import { InputDisplayStyled } from '../styled/InputDisplayStyled';

/**
 * Props for the Genere component.
 * 
 * @interface
 */
interface GenereProps {
  genereName: string;
  songCount: number;
}

/**
 * Genere Component, renders the details of a single genere
 * 
 * @component
 * 
 * @prop {GenereProps} props- The properties for the Genere component,
 * includes the genereName and songCount (the number of songs each genere has).
 *  
 * @returns {JSX.Element} The rendered component
 */
const Genere: React.FC<GenereProps> = ({genereName, songCount}) => {
  return (
    <>
      <RowStyled>
        <form>
          <InputDisplayStyled title={'true'} name='albumName' type='text' disabled value={genereName}/>
          <InputDisplayStyled name='songCount' type='text' disabled value={`${songCount} ${songCount===1?'song':'songs'}`}/>
        </form>
      </RowStyled>
    </>
  )
}

export default Genere