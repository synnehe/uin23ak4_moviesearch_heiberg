import './App.css';
import './css/main.css';
import {Route, Routes} from 'react-router-dom';
import { useEffect, useState } from 'react';
import Main from './components/Main';
import Movie from './components/Movie';

function App() {

  const [movies, setMovies] = useState([])
  const [search, setSearch] = useState("james+bond")

  const getMovies = async() => {
    const response = await fetch(`http://www.omdbapi.com/?s=${search}&type=movie&plot=short&apikey=74871aa1&`)
    const data = await response.json()
    console.log(data)
    setMovies(data?.Search)
  }

  useEffect(() =>{
    getMovies()
  },[])

  const [movie, setMovie] = useState([])
  const [movieId, setMovieId] = useState("tt2382320")

  const getMovie = async() => {
    const response = await fetch(`http://www.omdbapi.com/?i=${movieId}&type=movie&plot=full&apikey=74871aa1&`)
    const data = await response.json()
    console.log(data)
    setMovie(data)
  }

  useEffect(() =>{
    getMovie()
  },[movieId])


  return (
    <>
      <Routes>
        <Route index element={<Main movies={movies} setSearch={setSearch} getMovies={getMovies}/>}/>
        <Route path='/:slug' element={<Movie movie={movie} movies={movies} setMovie={setMovie} movieId={movieId} setMovieId={setMovieId} getMovie={getMovie}/>}/>
      </Routes>
    </>
  );
}

export default App;
