import { useMemo } from "react";
import Movie from "types/Movie";
import { getMovieImage } from "utils/helpers";

import "./MovieItem.css";

interface Props {
  movie: Movie;
}
export default function MovieItem({ movie }: Props) {
  const bgImage = useMemo(() => {
    return getMovieImage(movie.name);
  }, [movie.name]);

  return (
    <div className="movie-item">
      <img src={bgImage} className="banner-image" alt="" />
      <div className="movie-details">
        <div className="movie-name">{movie.name}</div>
        <div className="awards">
          <div className="award">
            {movie.academyAwardNominations} Award Nominations
          </div>
          <div className="award award--align-right">
            &#128081; {movie.academyAwardWins} Awards won
          </div>
          <div className="award ">
            {movie.rottenTomatoesScore} Rotten tomatoes score
          </div>
        </div>
      </div>
    </div>
  );
}
