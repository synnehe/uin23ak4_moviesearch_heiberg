import './App.css';
import './css/main.css';
import Header from './components/Header';
import {Route, Routes} from 'react-router-dom';
import { useEffect, useState } from 'react';
import Moviecard from './components/Moviecard';

function App() {

  const [movies, setMovies] = useState([])
  const [search, setSearch] = useState("James+bond")

  const getMovies = async() => {
    const response = await fetch(`http://www.omdbapi.com/?s=${search}&type=movie&plot=short&apikey=74871aa1&`)
    const data = await response.json()
    console.log(data)
    setMovies(data?.Search)
    console.log(movies)
  }

  useEffect(() =>{
    getMovies()
  },[])


  return (
    <>
      <Header/>
      <Routes>
        <Route index element={<Moviecard movies={movies}/>}/>
        <Route path=':slug' element={<Moviecard movies={movies}/>}/>
      </Routes>
    </>
  );
}

export default App;
