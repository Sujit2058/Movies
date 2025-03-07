import { useState, useEffect } from "react";
import MovieCard from "../Components/MovieCard";
import { searchMovies, getPopularMovies } from "../Services/api";
import "../CSS/Home.css"

function Home() {

    const [searchQuerry, setSearchQuery ] = useState("");
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] =useState(true);

    useEffect(() =>{
       const loadPopularMovies = async () => {
        try{
          const popularMovies = await getPopularMovies();
          setMovies(popularMovies)
        } catch (err) {
          console.log(err);
          setError("Failed To Load movies......");
        }
        finally{
        setLoading(false);
        }
       };

       loadPopularMovies();
    }, []);

    const handleSearch = (e)=> {
        e.preventDefault();
        alert(searchQuerry);
        setSearchQuery("");
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
          {movies.map((movie) => (
         
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      </div>
    );
}
export default Home;