import { Link } from "react-router-dom"
import Moviecard from "./Moviecard"

export default function Main({movies}) {

  return( 
    <main>
    {movies.map((movie, key) => (
      <Link to={movie?.movie?.label.replace(/\s/g, '-').toLowerCase()}>
        <Moviecard movies={movies} key={key} title={movie?.movie?.title} />
      </Link>
    ))}
    </main>
  )
}