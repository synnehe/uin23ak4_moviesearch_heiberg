import Moviecard from "./Moviecard"
import Header from "./Header"

export default function Main({movies, setSearch, getMovies}) {
  return( 
    <>
    <Header setSearch={setSearch} getMovies={getMovies}/>
    <body>
        <Moviecard movies={movies}/>
      {!movies ? <p id="error-message">No movies found</p> : null}
    </body>
    </>
  )
}

// {movie?.label.replace(/\s/g, '-').toLowerCase()}