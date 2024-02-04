import React, { useEffect, useState, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Box } from 'rebass'
import { SongsStyled } from '../styled/SongsStyled';
import { TitleStyled } from '../styled/TitleStyled';
import { RootState } from "../../state/store"
import { TableStyled } from '../styled/TableStyled';
import { ArtistType } from '../../models/models';
import { Artist, Footer } from '..';
import { Flex } from 'rebass'

const Artists = () => {

  const artists = useSelector((state: RootState) => state.artists.artists)
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch({type: 'GET_ARTISTS_REQUESTED'})
  }, [dispatch])

  return (
    <Flex flexDirection={'column'} width={'100%'}>
      <SongsStyled>          
        {/* title */}
        <TitleStyled>
          Artists
        </TitleStyled>

        {/* list of artists */}
        <TableStyled>
          {artists.map((artist: ArtistType) => (
            <Artist
              artistName={artist._id}
              songCount={artist.songCount} 
              albumCount={artist.albums.length}
            />
          ))}
        </TableStyled>
      </SongsStyled>
      <Footer/>
    </Flex>
  )
}

export default Artists