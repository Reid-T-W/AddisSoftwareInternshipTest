import React from 'react'
import { RowStyled } from '../styled/RowStyled';
import { InputDisplayStyled } from '../styled/InputDisplayStyled';

interface ArtistProps {
  artistName: string;
  songCount: number;
  albumCount: number;
}

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