import { configureStore } from '@reduxjs/toolkit';
import songsReducer from "./songs/songsSlice";
import createSagaMiddleware from "@redux-saga/core"
import mySaga from './sagas/sagas'

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    songs: songsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(mySaga)

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch