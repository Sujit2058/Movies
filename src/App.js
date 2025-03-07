import './App.css';
import MovieCard from './Components/MovieCard';


function App() {
  const movieNumber = 1;


  return (
    <>
      {movieNumber === 1 ? 
      (<MovieCard movie={{ title: "Littile Krishna", release_date: "2024" }} />) 
      : 
      (<MovieCard movie={{ title: "Krishna Aur Balaram", release_date: "2024" }} />)
      }
    </>
  );
}

export default App;
