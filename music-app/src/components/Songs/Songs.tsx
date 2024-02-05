import React, { useEffect, useState, useRef } from 'react'
import { SongType } from '../../models/models'
import { Song, Footer } from '..'
import { SongsStyled } from '../styled/SongsStyled'
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../state/store"
import { Button, Flex, Box } from 'rebass'
import { InputStyled } from '../styled/InputStyled';
import { TitleStyled } from '../styled/TitleStyled';
import { TableStyled } from '../styled/TableStyled';
import { addSongFailed } from '../../state/songs/songsSlice';
import { toast } from 'react-toastify';
import { error } from 'console';

interface validationErrorsType {
  title?: string,
  album?: string,
  artist?: string,
  genre?: string
}

/**
 * Songs Component - Dispatches an action to get a list
 * of songs and renders them using the Song Component. 
 * 
 * @component
 * 
 * @returns {JSX.Element} The rendered component
 */

export const Songs = () => {

  // Local states to be used in this component only
  // used when adding a new song
  const [localSongName, setLocalsongname] = useState("")
  const [localSongAlbum, setLocalsongalbum] = useState("")
  const [localSongArtist, setLocalsongartist] = useState("")
  const [localSongGenere, setLocalsonggenere] = useState("")

  const songs = useSelector((state: RootState) => state.songs.songs)
  const dispatch = useDispatch();

  // State that will be used during input validation, stores
  // errors found during input validation
  const [errors, setErrors] = useState<validationErrorsType>({})

  let validationErrors:validationErrorsType = {}

  // Dispatches an action to get list of songs
  useEffect(()=>{
    dispatch({type: 'GET_SONGS_REQUESTED'})
  }, [dispatch])

  // Ref to be used to scroll to top of table
  const tableRef: any = useRef(null);

  // Funtion to scroll to top
  const scrollToTop = () => {
    if (tableRef.current) {
      tableRef.current.scrollTop = 0;
    }
  };

  // Function to validate form (verfies that input fields 
  // are not empty)
  const validateForm = () => {
    if (!localSongName.trim()) {
      validationErrors.title = "title is required"
    }    
    if (!localSongAlbum.trim()) {
      validationErrors.album = "album is required"
    }    
    if (!localSongArtist.trim()) {
      validationErrors.artist = "artist is required"
    }
    if (!localSongGenere.trim()) {
      validationErrors.genre = "genre is required"
    }
    setErrors(validationErrors);
  }

  // Function to add new song, dispatches an action
  // with a payload containing the details of the new 
  // song to be added 
  const addSong = () => {
     // Check if the form is valid
     // This function populates the validationErrors
     // dict incase errors are found
     validateForm()
     if (Object.keys(validationErrors).length === 0) {
      // Form is valid, dispatch the action
      dispatch({
        type: 'ADD_SONG_REQUESTED',
        payload: {
          title: localSongName,
          album: localSongAlbum,
          artist: localSongArtist,
          genere: localSongGenere}
        });
        // Set the input values to empty
        setLocalsongname('')
        setLocalsongalbum('')
        setLocalsongartist('')
        setLocalsonggenere('')
        scrollToTop()
        // Set errors to empty
        setErrors({})
      } 
  }

  return (
      <Flex flexDirection={'column'} width={'100%'}>
            <SongsStyled>
              
              {/* Title */}
              <TitleStyled>
                Songs
              </TitleStyled>
              
              {/* List of songs */}
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

              {/* Add new song */}
              <Flex marginTop={'15px'}>

                {/* Input form*/}
                <Box>
                  <form>
                    <Flex flexDirection={"row"}>
                      <Flex flexDirection={"column"} color={"red"}>
                        <InputStyled name='songName' type='text' placeholder='Title' value={localSongName} onChange={ (e) => {setLocalsongname(e.target.value)}}/>
                        {errors.title && <span>{errors.title}</span>}
                      </Flex>
                      <Flex flexDirection={"column"} color={"red"}>
                        <InputStyled name='album' type='text' placeholder='Album' value={localSongAlbum} onChange={(e) => {setLocalsongalbum(e.target.value)}} />
                        {errors.album && <span>{errors.album}</span>}
                      </Flex>
                      <Flex flexDirection={"column"} color={"red"}>
                        <InputStyled name='artist' type='text' placeholder='Artist' value={localSongArtist} onChange={(e) => {setLocalsongartist(e.target.value)}}/>
                        {errors.artist && <span>{errors.artist}</span>}
                      </Flex>
                      <Flex flexDirection={"column"} color={"red"}>
                        <InputStyled name='genere' type='text' placeholder='Genere' value={localSongGenere} onChange={(e) => {setLocalsonggenere(e.target.value)}}/>
                        {errors.genre && <span>{errors.genre}</span>}
                      </Flex>
                    </Flex>
                  </form>
                </Box>
                
                {/* Add button */}
                <Box marginLeft={'10px'}>
                  <Button css={{ ":hover": {opacity:'0.5'}}} color={'white'} backgroundColor={"orange"} 
                    onClick={() => addSong()}>Add Song</Button>
                </Box>
              </Flex>
            </SongsStyled>
            <Footer />
        </Flex>
  )
}

export default Songs