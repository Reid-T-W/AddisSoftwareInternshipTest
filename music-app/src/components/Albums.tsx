import React, { useEffect, useState, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Box } from 'rebass'
import { SongsStyled } from './styled/SongsStyled';
import { TitleStyled } from './styled/TitleStyled';
import { RootState } from "../state/store"
import { TableStyled } from './styled/TableStyled';
import { AlbumType } from '../models/models';
import { Album } from './'

const Albums = () => {

  const albums = useSelector((state: RootState) => state.albums.albums)
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch({type: 'GET_ALBUMS_REQUESTED'})
  }, [dispatch])

  return (
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
  )
}

export default Albums