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
    <h1>{movie?.Title}</h1>
    <ul>
      <li>{movie?.Year}</li>
      <li>{movie?.Runtime}</li>
    </ul>
    <img src={movie?.Poster} alt={movie?.Title + "poster"}/>
    <p>{movie?.Plot}</p>
    </>
  )
}