import React, { useEffect, useState } from 'react'
import { SongType } from '../models/models'
import { Song } from './'

interface SongsStateType {
    songs: SongType[];
    setSongs: React.Dispatch<React.SetStateAction<SongType[]>>;
}

const Songs = () => {
  const [songs, setSongs] = useState<SongType[]>([])

  let songsList:SongType[] = [
    {id: 1, songName: 'Song1', album: 'Album1', artist: 'Artist1', genere: 'Genere1'},
    {id: 2, songName: 'Song1', album: 'Album1', artist: 'Artist1', genere: 'Genere1'},
    {id: 3, songName: 'Song1', album: 'Album1', artist: 'Artist1', genere: 'Genere1'},
    {id: 4, songName: 'Song1', album: 'Album1', artist: 'Artist1', genere: 'Genere1'}
  ]

  useEffect(()=>{
    songsList.forEach((item: SongType) => {
        // console.log("song: ", song)
        // setSongs([...songs, item])
        setSongs(prevSongs => [...prevSongs, item]);
      })
  },[])

  
  console.log("songs", songs)

  return (
    <>
            <div className='songs'>Songs</div>
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