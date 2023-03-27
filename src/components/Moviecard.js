
export default function Moviecard({movies}) {
  return(
    <body>
    {movies?.map((movie, index) => (
    <section>
      <article id="article-card">
        <img src={movie.Poster} alt={movie.Title + " Poster"}/>
        <h2 key={movie.Title.index}>{movie.Title}, {movie.Year}</h2>
        <p>{movie.plot}</p>
        <button>Mer om filmen</button>
      </article>
    </section>
    ))}
    </body>
  )
}
