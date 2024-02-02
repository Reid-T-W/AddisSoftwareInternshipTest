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
         addSongFailed,
         getStatsSucceeded,
         getStatsFailed,
         searchSongSucceeded,
         searchSongFailed } from '../songs/songsSlice';

import { getSongsApiCall,
         patchSongApiCall,
         deleteSongApiCall,
         registerSongApiCall,
         getStatsApiCall,
         searchSongApiCall
 } from '../../utils/apiCalls'

 // worker saga: will be fired on SEARCH_SONG_REQUESTED actions
function* searchSong(action: any): Generator<Effect, void, any> {
  try {
    const songs: SongType[] = yield call(searchSongApiCall, action.payload)
    yield put(searchSongSucceeded(songs))
  } catch (e: any) {
    yield put(searchSongFailed(e.message))
  }
}

// worker saga: will be fired on GET_STATS_REQUESTED actions
function* getStats(action: any):Generator<Effect, void, any> {
  try {
    const songs: SongType[] = yield call(getStatsApiCall)
    yield put(getStatsSucceeded(songs))
  } catch (e: any) {
    yield put(getStatsFailed(e.message))
  }
}

// worker saga: will be fired on GET_SONGS_REQUESTED actions
function* fetchSongs(action: any):Generator<Effect, void, any> {
  try {
    const songs: SongType[] = yield call(getSongsApiCall)
    yield put(fetchSongsSucceeded(songs))
  } catch (e: any) {
    yield put(fetchSongsFailed(e.message))
  }
}

// worker saga: will be fired on EDIT_SONG_REQUESTED actions
function* editSong(action: any):Generator<Effect, void, any> {
  try {
    const response: SongType[] = yield call(patchSongApiCall, action.payload)
    yield put(editSongSucceeded(response))
  } catch (e: any) {
    yield put(editSongFailed(e.message))
  }
}

// worker saga: will be fired on DELETE_SONG_REQUESTED actions
function* removeSong(action: any):Generator<Effect, void, any> {
  try {
    const response: SongType[] = yield call(deleteSongApiCall, action.payload)
    yield put(deleteSongSucceeded(response))
    // Once the song is successfully removed make a call to the stats api, so
    // that stats are updated instantly
    try {
      const response = yield call(getStatsApiCall)
      yield put(getStatsSucceeded(response))
    } catch (e: any) {
      yield put(getStatsFailed(e.message))
    }
  } catch (e: any) {
    yield put(deleteSongFailed(e.message))
  }
}

// worker saga: will be fired on ADD_SONG_REQUESTED actions
function* addSong(action: any):Generator<Effect, void, any> {
  try {
    const response: SongType[] = yield call(registerSongApiCall, action.payload)
    yield put(addSongSucceeded(response))
    // Once the song is successfully added make a call to the stats api, so
    // that stats are updated instantly
    try {
      const response = yield call(getStatsApiCall)
      yield put(getStatsSucceeded(response))
    } catch (e: any) {
      yield put(getStatsFailed(e.message))
    }

  } catch (e: any) {
    yield put(addSongFailed(e.message))
  }
}

// watcher saga
function* mySaga() {
  // handles actions related to songs state
  yield takeEvery('GET_SONGS_REQUESTED', fetchSongs)
  yield takeEvery('EDIT_SONG_REQUESTED', editSong)
  yield takeEvery('DELETE_SONG_REQUESTED', removeSong)
  yield takeEvery('ADD_SONG_REQUESTED', addSong)
  yield takeEvery('SEARCH_SONG_REQUESTED', searchSong)

  // handles actions related to stats state
  yield takeEvery('GET_STATS_REQUESTED', getStats)
}


export default mySaga