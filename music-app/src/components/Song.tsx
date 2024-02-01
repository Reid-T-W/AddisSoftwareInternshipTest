import React, { useState } from 'react'
import "../App.css"
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { FiSave } from "react-icons/fi";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../state/store"
import { fetchSongsFailed, setEditSong, } from '../state/songs/songsSlice';

interface SongProps {
  songId: number;
  songName: string;
  songAlbum: string;
  songArtist: string;
  songGenere: string;
}

const Song: React.FC<SongProps> = 
              ({
                songId,
                songName, 
                songAlbum, 
                songArtist, 
                songGenere}) => {

  const editSong = useSelector((state: RootState) => state.songs.editSong)
  const dispatch = useDispatch();

  const [localSongName, setLocalsongname] = useState(songName)
  const [localSongAlbum, setLocalsongalbum] = useState(songAlbum)
  const [localSongArtist, setLocalsongartist] = useState(songArtist)
  const [localSongGenere, setLocalsonggenere] = useState(songGenere)


  return (
    <>
      <div className="flex-table-row">
        <form>
          <input name='songName' type='text' disabled={!editSong} className='song-name' value={localSongName} onChange={ (e) => {setLocalsongname(e.target.value)}}/>
          <input name='album' type='text' disabled={!editSong} className='other-song-details' value={localSongAlbum} onChange={(e) => {setLocalsongalbum(e.target.value)}} />
          <input name='artist' type='text' disabled={!editSong} className='other-song-details' value={localSongArtist} onChange={(e) => {setLocalsongartist(e.target.value)}}/>
          <input name='genere' type='text' disabled={!editSong} className='other-song-details' value={localSongGenere} onChange={(e) => {setLocalsonggenere(e.target.value)}}/>
        </form>

        
        {
          editSong?<button onClick={()=> 
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
            <FiSave size={22} style={{color: 'white'}} /> 
          </button>:
          <button onClick={()=>
              {
                dispatch(setEditSong(true))
              }
            } type='button'>
            <CiEdit size={22} style={{color: 'white'}}/>
          </button>
        }
        <button onClick={() => dispatch({
                          type: 'DELETE_SONG_REQUESTED',
                          payload: songId
                          })} type='button'>
          <MdDelete size={22} style={{color: 'white'}} />
        </button>
      </div>
    </>  
  )
}

export default Song