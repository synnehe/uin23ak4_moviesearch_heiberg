import { useEffect } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import Moviecard from "./Moviecard"

export default function Movie({movies, movie, setMovieId, getMovie, movieId, setMovie}) {

  const {slug} = useParams()
  const currentMovie = movies.find((m) => m?.imdbID.replace(/\s/g, "-").toLowerCase() === slug)
  setMovieId(currentMovie.imdbID)
  console.log(currentMovie)

  return (
    <section id="movie-section">
    <h1>Moviesearch</h1>
    <section id="movie-section">
      <section id="title-section">
        <div>
          <h2 id="title">{movie?.Title} ({movie?.Year})</h2>
          <ul id="info">
            <li>{movie?.Released}</li>
            <li>{movie?.Runtime}</li>
            <li>{movie?.Genre}</li>
          </ul>
        </div>
        <div id="rating">
            <p>IMDb RATING</p>
            <div id="rating-star">
              <i className="bi bi-star-fill"></i>
              <div id="rating-numbers">
                <p>{movie?.imdbRating}/10</p>
                <p>{movie?.imdbVotes}</p>
              </div>
            </div>
        </div>
      </section>
      <section id="section2">
        <img id="poster" src={movie?.Poster} alt={movie?.Title + "poster"}/>
        <div id="plot-section">
          <p id="plot">{movie?.Plot}</p>
          <ul id="p2">
            <li>Directed by: {movie?.Director}</li>
            <li>Written by: {movie?.Writer}</li>
            <li>Actors: {movie?.Actors}</li>
            <li>Awards: {movie?.Awards}</li>
          </ul>
        </div>
      </section>
    </section>
    </section>
  )
}