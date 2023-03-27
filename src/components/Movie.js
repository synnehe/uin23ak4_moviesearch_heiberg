import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export default function Movie({movies}) {

  //const {slug} = useParams()
  //const movie = movies.find((movie) => movie.slug === slug)

  const [movie, setMovie] = useState([])
  const [movieId, setMovieId] = useState("tt2382320")

  const getMovies = async() => {
    const response = await fetch(`http://www.omdbapi.com/?i=${movieId}&type=movie&plot=short&apikey=74871aa1&`)
    const data = await response.json()
    console.log(data)
    setMovie(data)
  }
 
  useEffect(() =>{
    getMovies()
  },[])


  return (
    <>
    <h1>{movie?.Title} ({movie?.Year})</h1>
    <ul>
      <li>{movie?.Released}</li>
      <li>{movie?.Runtime}</li>
      <li>{movie?.Genre}</li>
    </ul>
    <img src={movie?.Poster} alt={movie?.Title + "poster"}/>
    <p>{movie?.Plot}</p>
    </>
  )
}