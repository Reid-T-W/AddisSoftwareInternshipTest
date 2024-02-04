import React, { useEffect, useState, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Box } from 'rebass'
import { SongsStyled } from '../styled/SongsStyled';
import { TitleStyled } from '../styled/TitleStyled';
import { RootState } from "../../state/store"
import { TableStyled } from '../styled/TableStyled';
import { AlbumType } from '../../models/models';
import { Album, Footer } from '..'
import { Flex } from 'rebass'

const Albums = () => {

  const albums = useSelector((state: RootState) => state.albums.albums)
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch({type: 'GET_ALBUMS_REQUESTED'})
  }, [dispatch])

  return (
    <Flex flexDirection={'column'} width={'100%'}>
      <SongsStyled>
                
        {/* title */}
        <TitleStyled>
          Albums
        </TitleStyled>
        
        {/* list of albums */}
        <TableStyled>

        {albums.map((album: AlbumType) => (
          <Album
            albumName={album._id}
            songCount={album.songCount} 
          />
        ))}
      </TableStyled>
      </SongsStyled>
      <Footer />
    </Flex>
  )
}

export default Albums