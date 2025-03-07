import { useState } from "react";
import MovieCard from "../Components/MovieCard";
import { searchMovies, getPopularMovies } from "../Services/api";
import "../CSS/Home.css"

function Home() {

    const [searchQuerry, setSearchQuery ] = useState("");

    const movies = getPopularMovies()

    const handleSearch = (e)=> {
        e.preventDefault()
        alert(searchQuerry)
    };

    return (
      <div className="home">
        <form onSubmit={handleSearch} className="search-form">
          <input
            type="text"
            placeholder="Search For Movies"
            className="search-input"
            value={searchQuerry}
            onChange={(e)=> setSearchQuery(e.target.value)}
            
          />
          <button type="submit" className="search-btn">Search</button>
        </form>
        <div className="movies-grid">
          {movies.map((movie) => 
          movie.title.toLowerCase().startsWith(searchQuerry) && (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      </div>
    );
}
export default Home;