import { Link } from "react-router-dom"

export default function Moviecard({movies}) {
  //const movie = movies.find((movie) => movie?.movie?.label.replace(/\s/g, '-').toLowerCase() === slug)

  return(
    <div id="movie-results">
    {movies?.map((movie, index) => (
    <section>
      <article key={index} id="article-card">
        <img src={movie.Poster} alt={movie.Title + " Poster"} placeholder=""/>
        <h2>{movie.Title}, {movie.Year}</h2>
        <Link key={index} to={movie?.movie?.Id.replace(/\s/g, "-").toLowerCase()}>
          <button>Mer om filmen</button>
        </Link>
      </article>
    </section>
    ))}
    </div>
  )
}
