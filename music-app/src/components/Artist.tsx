import React from 'react'
import { RowStyled } from './styled/RowStyled';
import { InputDisplayStyled } from './styled/InputDisplayStyled';

interface ArtistProps {
  artistName: string;
  songCount: number;
}

const Artist:React.FC<ArtistProps> = ({artistName, songCount}) => {
  return (
    <>
      <RowStyled>
        <form>
          <InputDisplayStyled title={'true'} name='artistName' type='text' disabled value={artistName}/>
          <InputDisplayStyled name='songCount' type='text' disabled value={`${songCount} ${songCount===1?'song':'songs'}`}/>
        </form>
      </RowStyled>
    </>
  )
}

export default Artist