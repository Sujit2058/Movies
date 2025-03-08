import "../CSS/Favourites.css"
import { useMovieContext } from "../Contexts/MovieContext";
import MovieCard from "../Components/MovieCard"

function Favourites(){
  const {favourites} = useMovieContext();

  if (favourites) {
    return (
    <div className="favorites">
      <h2>Your Favourites</h2>
    <div className="movies-grid">
              {favourites.map((movie) => (
             
                <MovieCard movie={movie} key={movie.id} />
              ))}
            </div>
            </div>
    );
  }
else{
    return(
      <div className="favorites-empty">
        <h2>No Favourites Movies Yet..</h2>
        <p>Start Adding Movies to Favourites To appear here</p>
      </div>  
    );
  }
}
export default Favourites;