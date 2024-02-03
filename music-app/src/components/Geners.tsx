import React, {useEffect} from 'react'
import '../App.css'
import { GenersStyled } from './styled/GenersStyled'
import { Genere } from './'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from "../state/store"
import { SongsStyled } from './styled/SongsStyled';
import { TitleStyled } from './styled/TitleStyled';
import { TableStyled } from './styled/TableStyled';
import { GenereType } from '../models/models';

const Geners = () => {

  const generes = useSelector((state: RootState) => state.generes.generes);
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch({type: 'GET_GENERES_REQUESTED'})
  }, [dispatch])

  return (
    <SongsStyled>
              
      {/* title */}
      <TitleStyled>
        Genres
      </TitleStyled>
      
      {/* list of albums */}
      <TableStyled>

      {generes.map((genere: GenereType) => (
        <Genere
          genereName={genere._id}
          songCount={genere.songCount} 
        />
      ))}
    </TableStyled>
    </SongsStyled>

  )
}

export default Geners