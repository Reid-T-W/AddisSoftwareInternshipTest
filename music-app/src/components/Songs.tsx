import React, { useEffect, useState } from 'react'
import { SongType } from '../models/models'
import { Song } from './'
import { SongsStyled } from './styled/SongsStyled'
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../state/store"
import { addSong, removeSong, updateSong } from '../state/songs/songsSlice';

// interface SongsStateType {
//     songs: SongType[];
//     setSongs: React.Dispatch<React.SetStateAction<SongType[]>>;
// }

const Songs = () => {
    const songs = useSelector((state: RootState) => state.songs.songs)
    const dispatch = useDispatch();

//   const [songs, setSongs] = useState<SongType[]>([])

//   let songsList:SongType[] = [
//     {id: 1, songName: 'Song1', album: 'Album1', artist: 'Artist1', genere: 'Genere1'},
//     {id: 2, songName: 'Song1', album: 'Album1', artist: 'Artist1', genere: 'Genere1'},
//     {id: 3, songName: 'Song1', album: 'Album1', artist: 'Artist1', genere: 'Genere1'},
//     {id: 4, songName: 'Song1', album: 'Album1', artist: 'Artist1', genere: 'Genere1'}
//   ]

//   useEffect(()=>{
//     songsList.forEach((item: SongType) => {
//         // console.log("song: ", song)
//         // setSongs([...songs, item])
//         setSongs(prevSongs => [...prevSongs, item]);
//       })
//   },[])

  
//   console.log("songs", songs)
  useEffect(()=>{
    dispatch({type: 'GET_SONGS_REQUESTED'})
  }, [dispatch])

  return (
    <>
            <SongsStyled>
              Songs

              <div className="flex-table">
                <div className="flex-table-header">
                  <div className="flex-table-data heading-text">Name</div>
                  <div className="flex-table-data heading-text">Album</div>
                  <div className="flex-table-data heading-text">Artist</div>
                  <div className="flex-table-data heading-text">Genere</div>
                </div>

                {songs.map((song: SongType) => (
                <Song key={song.id}
                  songId={song.id}
                  songName={song.songName} 
                  songAlbum = {song.album}
                  songArtist = {song.artist}
                  songGenere = {song.genere}
                />
              ))}


            </div>



              {/* <button onClick={() => dispatch(addSong({id: 1, songName: 'Song1', album: 'Album1', artist: 'Artist1', genere: 'Genere1'}))}>Add Song</button>
              <button onClick={() => dispatch(removeSong(1))}>Remove Song</button>
              <button onClick={() => dispatch(updateSong([1, {id: 1, songName: 'UpdatedSong', album: 'UpdatedAlbum', artist: 'UpdatedArtist', genere: 'UpdatedGenere'}]))}>Update Song</button> */}
            </SongsStyled>
            {/* {
                songs?.map((song: SongType) => (
                    <>
                        <input key={song.id} value={song.songName} />
                        <input key={song.id} value={song.album} />\
                        <input key={song.id} value={song.artist} />\
                        <input key={song.id} value={song.genere} />\
                    </>
                ))
            } */}
    </>
  )
}

export default Songs