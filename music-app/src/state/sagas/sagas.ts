import axios from 'axios'
import { Effect, call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { SongType } from '../../models/models';
import { fetchSongsRequested, 
         fetchSongsSucceeded, 
         fetchSongsFailed,
         editSongSucceeded,
         editSongFailed } from '../songs/songsSlice';
// require('dotenv').config()
// // Define action types
// const USER_FETCH_REQUESTED = 'USER_FETCH_REQUESTED';
// const USER_FETCH_SUCCEEDED = 'USER_FETCH_SUCCEEDED';
// const USER_FETCH_FAILED = 'USER_FETCH_FAILED';

// const userFetchSucceeded = (user: any) => ({
//     type: USER_FETCH_SUCCEEDED,
//     user,
// });

// const userFetchFailed = (message: string) => ({
//     type: USER_FETCH_FAILED,
//     message,
//   });

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
function* deleteSong(action: any):Generator<Effect, void, any> {
  try {

  } catch (e: any) {

  }
}

// watcher saga
function* mySaga() {
  yield takeEvery('GET_SONGS_REQUESTED', fetchSongs)
  yield takeEvery('EDIT_SONG_REQUESTED', editSong)
  yield takeEvery('DELETE_SONG_REQUESTED', deleteSong)
}


export default mySaga