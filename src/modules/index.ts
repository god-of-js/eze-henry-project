import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import movies, { MoviesState } from "./movies";
import quotes, { QuotesState } from "./quotes";

const store = configureStore({
  reducer: {
    movies,
    quotes,
  },
  middleware: [thunk],
});

export type AppDispatch = typeof store.dispatch;
export type AppState = typeof store.getState;

export interface RootState {
  movies: MoviesState;
  quotes: QuotesState;
}

export default function getStore() {
  return store;
}
