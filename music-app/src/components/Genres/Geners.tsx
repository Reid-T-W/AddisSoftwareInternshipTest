import React, {useEffect} from 'react'
import { GenersStyled } from '../styled/GenersStyled'
import { Genere, Footer } from '..'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from "../../state/store"
import { SongsStyled } from '../styled/SongsStyled';
import { TitleStyled } from '../styled/TitleStyled';
import { TableStyled } from '../styled/TableStyled';
import { GenereType } from '../../models/models';
import { Flex } from 'rebass'

/**
 * Geners Component - Dispatches an action to get a list
 * of geners and renders them using the Genere Component. 
 * 
 * @component
 * 
 * @returns {JSX.Element} The rendered component
 */
const Geners = () => {

  const generes = useSelector((state: RootState) => state.generes.generes);
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch({type: 'GET_GENERES_REQUESTED'})
  }, [dispatch])

  return (
    <Flex flexDirection={'column'} width={'100%'}>
      <SongsStyled>
                
        {/* title */}
        <TitleStyled>
          Genres
        </TitleStyled>
        
        {/* list of genres */}
        <TableStyled>

        {generes.map((genere: GenereType) => (
          <Genere
            genereName={genere._id}
            songCount={genere.songCount} 
          />
        ))}
      </TableStyled>
      </SongsStyled>
      <Footer />
    </Flex>

  )
}

export default Geners