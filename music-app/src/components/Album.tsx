import React from 'react'
import { RowStyled } from './styled/RowStyled';
import { InputDisplayStyled } from './styled/InputDisplayStyled';

interface AlbumProps {
  albumName: string;
  songCount: number;
}

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