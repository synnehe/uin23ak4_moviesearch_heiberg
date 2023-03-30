import { Link } from "react-router-dom"

export default function Moviecard({movies, getMovie, movieId}) {

  return(
    <div id="movie-results">
    {movies?.map((movie, index) => (
    <section id="results-section">
      <article key={index} id="article-card">
        <img src={movie.Poster} alt={movie.Title + " Poster"} placeholder=""/>
        <h2>{movie.Title}, {movie.Year}</h2>
        <Link to={movie?.imdbID.replace(/\s/g, "-").toLowerCase()} movie={movie} movies={movies} movieId={movieId} getMovie={getMovie}>
          <button>Mer om filmen</button>
        </Link>
      </article>
    </section>
    ))}
    </div>
  )
}
