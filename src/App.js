import './App.css';
import NavBar from './components/NavBar';
import Movie from './components/Movie';
import movies from './movies.json';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
   <>
    <NavBar></NavBar>
    <Movie props={movies}></Movie>
   </>
  );
}

export default App;
