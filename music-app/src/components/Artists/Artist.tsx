import React from 'react'
import { RowStyled } from '../styled/RowStyled';
import { InputDisplayStyled } from '../styled/InputDisplayStyled';

/**
 * Props for the Artist component.
 * 
 * @interface
 */
interface ArtistProps {
  artistName: string;
  songCount: number;
  albumCount: number;
}

/**
 * Artist Component, renders the details of a single artist
 * 
 * @component
 * 
 * @prop {ArtistProps} props- The properties for the Artist component,
 * includes the artistName, albumCount (the number of albums each 
 * artist has), and songCount (the number of songs each album has).
 *  
 * @returns {JSX.Element} The rendered component
 */
const Artist:React.FC<ArtistProps> = ({artistName, songCount, albumCount}) => {
  return (
    <>
      <RowStyled>
        <form>
          <InputDisplayStyled title={'true'} name='artistName' type='text' disabled value={artistName}/>
          <InputDisplayStyled name='songCount' type='text' disabled value={`${songCount} ${songCount===1?'song':'songs'}`}/>
          <InputDisplayStyled name='albumCount' type='text' disabled value={`${albumCount} ${albumCount===1?'album':'albums'}`}/>
        </form>
      </RowStyled>
    </>
  )
}

export default Artist