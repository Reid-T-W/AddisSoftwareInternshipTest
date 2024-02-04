import axios from 'axios'
import { SongType } from '../models/models';

export const getSongsApiCall = () => {
    return axios.get<SongType[]>(`${process.env.REACT_APP_URL}/songs`)
    .then((response) => {
      return response.data
    }).catch((error) => {
      throw(error)
    })
  }
  
export const patchSongApiCall = (song: SongType) => {
    return axios.patch<SongType[]>(`${process.env.REACT_APP_URL}/songs/${song._id}`,
                                    song)
    .then((response) => {
      return response.data
    }).catch((error) => {
      throw(error)
    })
  }
  
export const deleteSongApiCall = (songId: number) => {
    return axios.delete<SongType[]>(`${process.env.REACT_APP_URL}/songs/${songId}`)
    .then((response) => {
      return response.data
    }).catch((error) => {
      throw(error)
    })
  }
  
export const registerSongApiCall = (song: SongType) => {
    return axios.post<SongType[]>(`${process.env.REACT_APP_URL}/songs`, song)
    .then((response) => {
      return response.data
    }).catch((error) => {
      throw(error)
    })
  }

export const getStatsApiCall = () => {
    return axios.get(`${process.env.REACT_APP_URL}/stats`)
    .then((response)=>{
        return response.data
    }).catch((error) => {
      throw(error)
    })
}

export const searchSongApiCall = (searchTerm: any) => {
    return axios.get(`${process.env.REACT_APP_URL}/songs/search`, {params: searchTerm})
    .then((response) => {
        return response.data
    }).catch((error) => {
      throw(error)
    })
}

export const getAlbumsApiCall = () => {
  return axios.get(`${process.env.REACT_APP_URL}/albums`)
  .then((response) => {
      return response.data.albumsWithSongCount
  }).catch((error) => {
    throw(error)
  })
}

export const getArtistsApiCall = () => {
  return axios.get(`${process.env.REACT_APP_URL}/artists`)
  .then((response) => {
      return response.data.artistsWithSongCount
  }).catch((error) => {
    throw(error)
  })
}

export const getGeneresApiCall = () => {
  return axios.get(`${process.env.REACT_APP_URL}/generes`)
  .then((response) => {
      return response.data.generesWithSongCount
  }).catch((error) => {
    throw(error)
  })
}