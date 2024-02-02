import axios from 'axios'
import { SongType } from '../models/models';

export const getSongsApiCall = () => {
    return axios.get<SongType[]>(`${process.env.REACT_APP_URL}/songs`)
    .then((response) => {
      return response.data
    });
  }
  
export const patchSongApiCall = (song: SongType) => {
    return axios.patch<SongType[]>(`${process.env.REACT_APP_URL}/songs/${song._id}`,
                                    song)
    .then((response) => {
      return response.data
    });
  }
  
export const deleteSongApiCall = (songId: number) => {
    return axios.delete<SongType[]>(`${process.env.REACT_APP_URL}/songs/${songId}`)
    .then((response) => {
      return response.data
    })
  }
  
export const registerSongApiCall = (song: SongType) => {
    return axios.post<SongType[]>(`${process.env.REACT_APP_URL}/songs`, song)
    .then((response) => {
      return response.data
    })
  }

export const getStatsApiCall = () => {
    return axios.get(`${process.env.REACT_APP_URL}/stats`)
    .then((response)=>{
        return response.data
    })
}

export const searchSongApiCall = (searchTerm: any) => {
    return axios.get(`${process.env.REACT_APP_URL}/songs/search`, {params: searchTerm})
    .then((response) => {
        return response.data
    })
}