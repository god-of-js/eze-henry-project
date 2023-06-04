import { createSelector, createSlice } from "@reduxjs/toolkit";
import { AppDispatch, AppState, RootState } from ".";
import Api from "Api";
import Movie from "types/Movie";
import Quote from "types/Quote";
import Character from "types/Character";

export interface MoviesState {
  movies: Movie[];
  quotes: Quote[];
  characters: Character[];
}
const initialState: MoviesState = {
  characters: [],
  movies: [],
  quotes: [],
};
const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    setMovies(state: MoviesState, action: { payload: Movie[] }) {
      state.movies = action.payload;
    },
    setMovie(state: MoviesState, actions: { payload: Movie }) {
      state.movies.push(actions.payload);
    },
    setCharacters(state: MoviesState, actions: { payload: Character[] }) {
      state.characters = actions.payload;
    },
  },
});

export const { setMovies, setMovie, setCharacters } = moviesSlice.actions;
export default moviesSlice.reducer;

const movies = (state: RootState) => state.movies.movies;

export const selectMovie = (movieId: string) =>
  createSelector(movies, (movieArr) =>
    movieArr.find(({ _id }) => _id === movieId)
  );

export const getMovies = () => {
  return (dispatch: AppDispatch) => {
    return Api.getMovies().then((data) => {
      dispatch(setMovies(data));
    });
  };
};

export const getMovie = (movieId: string) => {
  return (dispatch: AppDispatch, state: AppState) => {
    const indexOfMovieInStore = state().movies.movies.findIndex(
      ({ _id }) => _id === movieId
    );
    if (indexOfMovieInStore !== -1) return;

    return Api.getMovieBy(movieId).then((data) => {
      dispatch(setMovie(data));
    });
  };
};

export const getCharacters = () => {
  return (dispatch: AppDispatch) => {
    return Api.getCharacters().then((data) => {
      dispatch(setCharacters(data));
    });
  };
};
