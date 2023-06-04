import { createSlice } from "@reduxjs/toolkit";
import Api from "Api";
import Quote from "types/Quote";
import { AppDispatch } from ".";

export interface QuotesState {
  quotes: Quote[];
}
const initialState: QuotesState = {
  quotes: [],
};
const quoteSlice = createSlice({
  name: "Quotes",
  initialState,
  reducers: {
    setQuotes(state: QuotesState, actions: { payload: Quote[] }) {
      state.quotes = actions.payload;
    },
    appendQuotes(state: QuotesState, actions: { payload: Quote[] }) {
      state.quotes.push(...actions.payload);
    },
  },
});

export const { setQuotes, appendQuotes } = quoteSlice.actions;
export default quoteSlice.reducer;

export const getQuotes = () => {
  return (dispatch: AppDispatch) => {
    return Api.getQuotes().then((data) => {
      dispatch(setQuotes(data.docs));
      return data;
    });
  };
};
export const getMovieQuotes = (movieId: string, page: number) => {
  return (dispatch: AppDispatch) => {
    return Api.getMovieQuotesBy(movieId, page).then((data) => {
      if (page === 1) dispatch(setQuotes(data.docs));
      else dispatch(appendQuotes(data.docs));
      return data;
    });
  };
};
