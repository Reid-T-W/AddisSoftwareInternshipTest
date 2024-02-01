import axios from 'axios'
import { Effect, call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { SongType } from '../../models/models';
import { fetchSongsRequested, 
         fetchSongsSucceeded, 
         fetchSongsFailed,
         editSongSucceeded,
         editSongFailed,
         deleteSongSucceeded,
         deleteSongFailed,
         addSongSucceeded,
         addSongFailed } from '../songs/songsSlice';

const getSongs = () => {
  return axios.get<SongType[]>(`${process.env.REACT_APP_URL}/songs`)
  .then((response) => {
    return response.data
  });
}

const patchSong = (song: SongType) => {
  return axios.patch<SongType[]>(`${process.env.REACT_APP_URL}/songs/${song._id}`,
                                  song)
  .then((response) => {
    return response.data
  });
}

const deleteSong = (songId: number) => {
  return axios.delete<SongType[]>(`${process.env.REACT_APP_URL}/songs/${songId}`)
  .then((response) => {
    return response.data
  })
}

const registerSong = (song: SongType) => {
  return axios.post<SongType[]>(`${process.env.REACT_APP_URL}/songs`, song)
  .then((response) => {
    return response.data
  })
}
// worker saga: will be fired on GET_SONGS_REQUESTED actions
function* fetchSongs(action: any):Generator<Effect, void, any> {
  try {
    const songs: SongType[] = yield call(getSongs)
    yield put(fetchSongsSucceeded(songs))
  } catch (e: any) {
    yield put(fetchSongsFailed(e.message))
  }
}

// worker saga: will be fired on EDIT_SONG_REQUESTED actions
function* editSong(action: any):Generator<Effect, void, any> {
  try {
    const response: SongType[] = yield call(patchSong, action.payload)
    yield put(editSongSucceeded(response))
  } catch (e: any) {
    yield put(editSongFailed(e.message))
  }
}

// worker saga: will be fired on DELETE_SONG_REQUESTED actions
function* removeSong(action: any):Generator<Effect, void, any> {
  try {
    const response: SongType[] = yield call(deleteSong, action.payload)
    yield put(deleteSongSucceeded(response))
  } catch (e: any) {
    yield put(deleteSongFailed(e.message))
  }
}

// worker saga: will be fired on ADD_SONG_REQUESTED actions
function* addSong(action: any):Generator<Effect, void, any> {
  try {
    const response: SongType[] = yield call(registerSong, action.payload)
    yield put(addSongSucceeded(response))
  } catch (e: any) {
    yield put(addSongFailed(e.message))
  }
}

// watcher saga
function* mySaga() {
  yield takeEvery('GET_SONGS_REQUESTED', fetchSongs)
  yield takeEvery('EDIT_SONG_REQUESTED', editSong)
  yield takeEvery('DELETE_SONG_REQUESTED', removeSong)
  yield takeEvery('ADD_SONG_REQUESTED', addSong)
}


export default mySaga