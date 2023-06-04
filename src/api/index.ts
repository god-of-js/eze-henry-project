import Character from "types/Character";
import Movie from "types/Movie";
import Quote from "types/Quote";
import AxiosInstance from "./AxiosInstance";

type MovieApiResponse = { docs: Movie[] };
export type QuoteApiResponse = {
  docs: Quote[];
  limit: number;
  page: number;
  pages: number;
  total: number;
};
class Api {
  getMovies() {
    return this.get<MovieApiResponse>("/movie").then(({ docs }) => docs);
  }

  getMovieBy(id: string) {
    return this.get<MovieApiResponse>(`/movie/${id}`).then(
      ({ docs }) => docs[0]
    );
  }
  getMovieQuotesBy(movieId: string, page = 1, limit = 20) {
    return this.get<QuoteApiResponse>(
      `/movie/${movieId}/quote?page=${page}&limit=${limit}`
    ).then((data) => data);
  }
  getQuotes() {
    return this.get<QuoteApiResponse>(`/quote`).then((data) => data);
  }
  getCharacters() {
    return this.get<{ docs: Character[] }>(`/character`).then(
      ({ docs }) => docs
    );
  }
  private get<T>(url: string): Promise<T> {
    return AxiosInstance.get(url).then(({ data }) => data);
  }
}

export default new Api();
