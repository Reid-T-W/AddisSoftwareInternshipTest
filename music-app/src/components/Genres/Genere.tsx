import React from 'react'
import { GenereStyled } from '../styled/GenereStyled'
import { RowStyled } from '../styled/RowStyled';
import { InputDisplayStyled } from '../styled/InputDisplayStyled';

interface GenereProps {
  genereName: string;
  songCount: number;
}

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