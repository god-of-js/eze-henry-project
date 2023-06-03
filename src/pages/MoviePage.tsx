import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import {
  getCharacters,
  getMovie,
  getMovieQuotes,
  selectMovie,
} from "modules/movies";
import toAnyAction, { getMovieImage } from "utils/helpers";

import "./MoviePage.css";
import { QuoteApiResponse } from "Api";
import { RootState } from "modules/index";
import UiButton from "components/ui/UiButton";
import QuoteItem from "components/quotes/QuoteItem";

export default function MoviePage() {
  const { movieId } = useParams();
  const dispatch = useDispatch();

  const movie = useSelector(selectMovie(movieId!));
  const quotes = useSelector((state: RootState) => state.movies.quotes);
  const characters = useSelector((state: RootState) => state.movies.characters)

  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);

  const bgImage = useMemo(() => {
    if (movie) return getMovieImage(movie?.name);
  }, [movie?.name]);

  const duration = useMemo(() => {
    if (movie) {
      const hours = Math.floor(movie.runtimeInMinutes / 60);
      const remainingMinutes = movie.runtimeInMinutes % 60;
      return `${hours}hrs ${remainingMinutes}mins`;
    }
  }, [movie?.runtimeInMinutes]);

  const characterNames = useMemo(() => {
    const characterIds = quotes.map(({ character }) => character);
    const uniqueCharacters = [...new Set(characterIds)]

    const charactersInMovie = characters.filter(({ _id }) => uniqueCharacters.includes(_id));
    
    if (!charactersInMovie.length) return 'No cast available for this movie'
    const charactersToShow = charactersInMovie.slice(0, 12);
    let charactersString = charactersToShow.map(({name}) => name).join(', ')
    return charactersInMovie.length > 12 ? charactersString + ` +${charactersInMovie.length - 12} more` : charactersString;

  }, [quotes, characters])

  const loadMoreQuotesIsDisabled = useMemo(() => {
    return page === totalPages;
  }, [page, totalPages]);

  function loadQuotes() {
    if (!movieId) return;
    setLoading(true);
    return dispatch(toAnyAction(getMovieQuotes(movieId, page + 1)))
      .then((data: QuoteApiResponse) => {
        setPage(data.page);
        setTotalPages(data.pages);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  useEffect(() => {
    if (movieId) {
      Promise.all([
        dispatch(toAnyAction(getMovie(movieId))),
        loadQuotes(),
        dispatch(toAnyAction(getCharacters())),
      ]);
    }
  }, []);

  return (
    <>
      {movie && (
        <div className="movie-page">
          <div className="movie">
            <div
              className="movie-banner"
              style={{ backgroundImage: `url(${bgImage})` }}
            />
            <div className="movie-details">
              <div className="movie-main-content">
                <h2 className="movie-name">{movie.name}</h2>
                <p className="movie-description">
                  {/* Lorem ipsum because descriptions are not provided */}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
                  repudiandae minus sapiente sequi molestiae numquam tempora,
                  sed illum fugit quae quod sint mollitia reiciendis! Saepe eum
                  sunt distinctio cumque doloribus! Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Vel repudiandae minus sapiente
                  sequi molestiae numquam tempora, sed illum fugit quae quod
                  sint mollitia reiciendis! Saepe eum sunt distinctio cumque
                  doloribus!
                </p>
                <p>Cast: {characterNames}</p>
              </div>
              <div className="meta-data">
                <div>{duration} Duration</div>
                <div>{movie.academyAwardNominations} Award Nominations</div>
                <div>&#128081; {movie.academyAwardWins} Awards won</div>
                <div>
                  &#36; {movie.boxOfficeRevenueInMillions}M Earned in box office
                </div>
                <div>{movie.rottenTomatoesScore} Rotten tomatoes score</div>
                <div>{movie.academyAwardNominations} Award Nominations</div>
              </div>
            </div>
          </div>
          <div className="quotes">
            <h3>Quotes</h3>
            {quotes.map((quote) => (
              <QuoteItem key={quote._id} quote={quote.dialog} />
            ))}
          </div>
          {!!quotes.length ? (
            <UiButton
              loading={loading}
              disabled={loadMoreQuotesIsDisabled}
              onClick={loadQuotes}
            >
              Load More Quotes
            </UiButton>
          ) : (
            <div className="empty-quotes">This movie has no Quotes</div>
          )}
        </div>
      )}
    </>
  );
}
