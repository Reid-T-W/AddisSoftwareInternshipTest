import React from 'react'
import { RowStyled } from '../styled/RowStyled';
import { InputDisplayStyled } from '../styled/InputDisplayStyled';

/**
 * Props for the Album component.
 * 
 * @interface
 */
interface AlbumProps {
  albumName: string;
  songCount: number;
}

/**
 * Album Component, renders the details of a single album
 * 
 * @component
 * 
 * @prop {AlbumProps} props- The properties for the Album component,
 * includes the albumName and songCount (the number of songs each
 * album has).
 *  
 * @returns {JSX.Element} The rendered component
 */
const Album:React.FC<AlbumProps> = ({albumName, songCount}) => {
  return (
    <>
      <RowStyled>
        <form>
          <InputDisplayStyled title={'true'} name='albumName' type='text' disabled value={albumName}/>
          <InputDisplayStyled name='songCount' type='text' disabled value={`${songCount} ${songCount===1?'song':'songs'}`}/>
        </form>
      </RowStyled>
    </>
  )
}

export default Album