import React, { useEffect, useState } from 'react'
import { SongType } from '../models/models'
import { Song } from './'
import { SongsStyled } from './styled/SongsStyled'
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../state/store"
import { Button } from 'rebass'

// interface SongsStateType {
//     songs: SongType[];
//     setSongs: React.Dispatch<React.SetStateAction<SongType[]>>;
// }

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

  return (
    <>
            <SongsStyled>
              Songs

              <div className="flex-table">
                {/* <div className="flex-table-header">
                  <div className="flex-table-data heading-text">Name</div>
                  <div className="flex-table-data heading-text">Album</div>
                  <div className="flex-table-data heading-text">Artist</div>
                  <div className="flex-table-data heading-text">Genere</div>
                </div> */}

                {songs.map((song: SongType) => (
                <Song key={song._id}
                  songId={song._id}
                  songName={song.title} 
                  songAlbum = {song.album}
                  songArtist = {song.artist}
                  songGenere = {song.genere}
                />
              ))}
              </div>
              {/* add new song */}
                <form>
                  <input name='songName' type='text' className='song-name' onChange={ (e) => {setLocalsongname(e.target.value)}}/>
                  <input name='album' type='text' className='other-song-details' onChange={(e) => {setLocalsongalbum(e.target.value)}} />
                  <input name='artist' type='text' className='other-song-details' onChange={(e) => {setLocalsongartist(e.target.value)}}/>
                  <input name='genere' type='text' className='other-song-details' onChange={(e) => {setLocalsonggenere(e.target.value)}}/>
                </form>
                <button onClick={() => {
                  dispatch({
                    type: 'ADD_SONG_REQUESTED',
                    payload: {
                      title: localSongName,
                      album: localSongAlbum,
                      artist: localSongArtist,
                      genere: localSongGenere}
                    })
                }}>Add Song</button>
            </SongsStyled>
    </>
  )
}

export default Songs