import React, { useState } from 'react'
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { FiSave } from "react-icons/fi";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../state/store"
import { fetchSongsFailed, setEditSong, } from '../../state/songs/songsSlice';
import { InputDisplayStyled } from '../styled/InputDisplayStyled';
import { ButtonLogoStyled } from '../styled/ButtonLogoStyled';
import { RowStyled } from '../styled/RowStyled';

/**
 * Props for the Song component.
 * 
 * @interface
 */
interface SongProps {
  songId: number;
  songName: string;
  songAlbum: string;
  songArtist: string;
  songGenere: string;
}

/**
 * Song Component, renders the details of a single song
 * 
 * @component
 * 
 * @prop {SongProps} props- The properties for the Song component,
 * includes the songId, songName, songAlbum, songArtist, and 
 * songGenre
 *  
 * @returns {JSX.Element} The rendered component
 */
const Song: React.FC<SongProps> = 
              ({
                songId,
                songName, 
                songAlbum, 
                songArtist, 
                songGenere}) => {

  const editSong = useSelector((state: RootState) => state.songs.editSong)
  const dispatch = useDispatch();

  // Local states to be used in this component only
  // used when updating a song
  const [localSongName, setLocalsongname] = useState(songName)
  const [localSongAlbum, setLocalsongalbum] = useState(songAlbum)
  const [localSongArtist, setLocalsongartist] = useState(songArtist)
  const [localSongGenere, setLocalsonggenere] = useState(songGenere)


  return (
    <>
      <RowStyled>
        <form>
          <InputDisplayStyled title={'true'} name='songName' type='text' disabled={!editSong} value={localSongName} onChange={ (e) => {setLocalsongname(e.target.value)}} />
          <InputDisplayStyled name='album' type='text' disabled={!editSong} value={localSongAlbum} onChange={(e) => {setLocalsongalbum(e.target.value)}} />
          <InputDisplayStyled name='artist' type='text' disabled={!editSong} value={localSongArtist} onChange={(e) => {setLocalsongartist(e.target.value)}}/>
          <InputDisplayStyled name='genere' type='text' disabled={!editSong} value={localSongGenere} onChange={(e) => {setLocalsonggenere(e.target.value)}}/>
        </form>

        
        {
          editSong?<ButtonLogoStyled onClick={()=> 
              {
                dispatch({
                          type: 'EDIT_SONG_REQUESTED',
                          payload: {
                            _id: songId, 
                            title: localSongName,
                            album: localSongAlbum,
                            artist: localSongArtist,
                            genere: localSongGenere}
                          })
                dispatch(setEditSong(false))
              }
            } type='button'>
            <FiSave size={22} style={{color: 'orange'}} /> 
          </ButtonLogoStyled>:
          <ButtonLogoStyled onClick={()=>
              {
                dispatch(setEditSong(true))
              }
            } type='button'>
            <CiEdit size={22} style={{color: 'orange'}}/>
          </ButtonLogoStyled>
        }
        <ButtonLogoStyled onClick={() => dispatch({
                          type: 'DELETE_SONG_REQUESTED',
                          payload: songId
                          })} type='button'>
          <MdDelete size={22} style={{color: 'orange'}} />
        </ButtonLogoStyled>
      </RowStyled>
    </>  
  )
}

export default Song