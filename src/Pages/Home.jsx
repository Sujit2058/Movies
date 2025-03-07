import { useState } from "react";
import MovieCard from "../Components/MovieCard";

function Home() {

    const [searchQuerry, setSearchQuery ] = useState("");

    const movies = [
        { id: 1, title: "Little Krishna", release_date: "2024" },
        { id: 2, title: "Krishna Aur Balaram", release_date: "2024" },
        { id: 3, title: "Krishna", release_date: "2024" },
        { id: 4, title: "Krishna, The Suprem Personality", release_date: "2020" },
    ]


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
          <button type="submit" className="submit-btn">Search</button>
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