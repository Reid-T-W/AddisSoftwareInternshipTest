import React, { useEffect, useState, useRef } from 'react'
import { SongType } from '../models/models'
import { Song } from './'
import { SongsStyled } from './styled/SongsStyled'
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../state/store"
import { Button, Flex, Box } from 'rebass'
import { InputStyled } from './styled/InputStyled';
import { TitleStyled } from './styled/TitleStyled';
import { TableStyled } from './styled/TableStyled';

const Songs = () => {
  const [localSongName, setLocalsongname] = useState("")
  const [localSongAlbum, setLocalsongalbum] = useState("")
  const [localSongArtist, setLocalsongartist] = useState("")
  const [localSongGenere, setLocalsonggenere] = useState("")

  const songs = useSelector((state: RootState) => state.songs.songs)
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch({type: 'GET_SONGS_REQUESTED'})
  }, [dispatch])

  // ref to be used to scroll to top of table
  const tableRef: any = useRef(null);

  // funtion to scroll to top
  const scrollToTop = () => {
    if (tableRef.current) {
      tableRef.current.scrollTop = 0;
    }
  };

  return (
    <>
            <SongsStyled>
              
              {/* title */}
              <TitleStyled>
                Songs
              </TitleStyled>
              
              {/* list of songs */}
              <TableStyled ref={tableRef}>

                {songs.map((song: SongType) => (
                  <Song key={song._id}
                    songId={song._id}
                    songName={song.title} 
                    songAlbum = {song.album}
                    songArtist = {song.artist}
                    songGenere = {song.genere}
                  />
                ))}
              </TableStyled>

              {/* add new song */}
              <Flex marginTop={'15px'}>

                {/* input form*/}
                <Box>
                  <form>
                    <InputStyled name='songName' type='text' placeholder='Name' onChange={ (e) => {setLocalsongname(e.target.value)}}/>
                    <InputStyled name='album' type='text' placeholder='Album' onChange={(e) => {setLocalsongalbum(e.target.value)}} />
                    <InputStyled name='artist' type='text' placeholder='Artist' onChange={(e) => {setLocalsongartist(e.target.value)}}/>
                    <InputStyled name='genere' type='text' placeholder='Genere' onChange={(e) => {setLocalsonggenere(e.target.value)}}/>
                  </form>
                </Box>
                
                {/* add button */}
                <Box marginLeft={'10px'}>
                  <Button color={'black'} 
                    onClick={() => {dispatch({
                      type: 'ADD_SONG_REQUESTED',
                      payload: {
                        title: localSongName,
                        album: localSongAlbum,
                        artist: localSongArtist,
                        genere: localSongGenere}
                      })
                      setLocalsongname("")
                      setLocalsongalbum("")
                      setLocalsongartist("")
                      setLocalsonggenere("")
                      scrollToTop()
                  }}>Add Song</Button>
                </Box>
              </Flex>
            </SongsStyled>
    </>
  )
}

export default Songs