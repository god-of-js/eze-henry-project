import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "modules/index";
import { getMovies } from "modules/movies";

import "./MoviesPage.css";
import toAnyAction from "utils/helpers";
import UiTypewriter from "components/ui/UiTypewriter";
import MovieItem from "components/movies/MovieItem";
import { Link } from "react-router-dom";

export default function MoviesPage() {
  const movies = useSelector((state: RootState) => state.movies.movies);
  const dispatch = useDispatch();
  const bannerSentences = [
    "Enter the Realm of Middle-earth",
    "Explore the Epic Adventure",
    "Discover the Magic of Tolkien",
  ];

  useEffect(() => {
    dispatch(toAnyAction(getMovies()));
  }, []);
  return (
    <>
      <section className="banner">
        <h2 className="banner-title">
          <UiTypewriter sentences={bannerSentences} />
        </h2>
      </section>
      <div className="movie-list">
        {movies.map((movie) => (
          <Link to={`/movies/${movie._id}`} key={movie._id}>
            <MovieItem movie={movie} />
          </Link>
        ))}
      </div>
    </>
  );
}
