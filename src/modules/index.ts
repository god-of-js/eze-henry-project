import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import movies, { MoviesState } from "./movies";

const store = configureStore({
  reducer: {
    movies,
  },
  middleware: [thunk],
});

export type AppDispatch = typeof store.dispatch;
export type AppState = typeof store.getState;

export interface RootState {
  movies: MoviesState;
}

export default function getStore() {
  return store;
}
