import './App.css';
import './css/main.css';
import Header from './components/Header';
import {Route, Routes} from 'react-router-dom';
import { useEffect, useState } from 'react';
import Moviecard from './components/Moviecard';
import Main from './components/Main';

function App() {

  const [movies, setMovies] = useState([])
  const [search, setSearch] = useState("Pirates+of+the+caribbean")

  const getMovies = async() => {
    const response = await fetch(`http://www.omdbapi.com/?s=${search}&type=movie&plot=short&apikey=74871aa1&`)
    const data = await response.json()
    console.log(data)
    setMovies(data?.Search)
  }

  useEffect(() =>{
    getMovies()
  },[])


  return (
    <>
      <Routes>
        <Route index element={<Main movies={movies} setSearch={setSearch} getMovies={getMovies}/>}/>
        <Route path=':slug' element={<Main/>}/>
      </Routes>
    </>
  );
}

export default App;
