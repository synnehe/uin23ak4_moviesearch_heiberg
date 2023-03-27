export default function Search({search, setSearch, getMovies}) {
 
  const handleSubmit = (event) =>{
    event.preventDefault()
  }

  const handleSearch = (event) => {
    if (event.target.value.length > 2){
      setSearch(event.target.value)
      console.log(event.target.value)
    }
  }

  return(
    <nav id="search-section">
      <form onSubmit={handleSubmit}>
        <input id="search-bar" type="search" onChange={handleSearch} placeholder="Type to search..."></input>
        <button type="submit" onClick={getMovies}><i class="bi bi-search"></i></button>
      </form>
    </nav>
  )
}