import { Link, useParams } from "react-router-dom"
import Moviecard from "./Moviecard"
import Header from "./Header"

export default function Main({movies, setSearch, getMovies}) {
  //const {slug} = useParams()
  //const movie = movies.find((movie) => movie?.movie?.label.replace(/\s/g, '-').toLowerCase() === slug)


  return( 
    <>
    <Header setSearch={setSearch} getMovies={getMovies}/>
    <body>
      <Link to="">
        <Moviecard movies={movies}/>
      </Link>
      {!movies ? <p id="error-message">No movies found</p> : null}
    </body>
    </>
  )
}

// {movie?.label.replace(/\s/g, '-').toLowerCase()}