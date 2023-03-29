import Search from "./Search";

export default function Title({setSearch, getMovies, movies}) {
  return(
    <header>
      <h1>Moviesearch</h1>
      <Search setSearch={setSearch} getMovies={getMovies}/>
    </header>
  )
}