
export default function Moviecard({movies}) {
  return(
    <div id="movie-results">
    {movies?.map((movie, index) => (
    <section>
      <article key={index} id="article-card">
        <img src={movie.Poster} alt={movie.Title + " Poster"} placeholder=""/>
        <h2>{movie.Title}, {movie.Year}</h2>
        <button>Mer om filmen</button>
      </article>
    </section>
    ))}
    </div>
  )
}
