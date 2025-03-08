
import { Route, Routes } from 'react-router-dom';
import './CSS/App.css';
import Home from './Pages/Home';
import Favourites from './Pages/Favourites';
import NavBar from './Components/NavBar';
import { MovieProvider } from './Contexts/MovieContext';


function App() {
  

  return (
    <MovieProvider>
    <NavBar/>
    <main className='main-content'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/favourites' element={<Favourites/>}/>
        <Route path='/?' element={<Favourites/>}/>
      </Routes>
    </main>
    </MovieProvider>
  );
}

export default App;
