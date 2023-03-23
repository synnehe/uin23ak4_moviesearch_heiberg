import Search from "./Search"
import Moviecard from "./Moviecard"

export default function Main() {
  const getMovies = async() =>{
    const response = await fetch('http://www.omdbapi.com/?i=tt3896198&apikey=74871aa1')
    const data = await response.json()
    /*setMovies(data.articles)*/
  }

  return( 
    <main>
    <Search/>
    <Moviecard/>
    </main>
  )
}