import './App.css';
import {useState} from 'react';
import movies from './movies.json';
import { Button } from 'react-bootstrap';

function App() {
  return (
   <>
    <NavBar></NavBar>
    <Movie props={movies}></Movie>
   </>
  );
}

function NavBar() {
  const [loginState, setloginState] = useState("Login", "Logout")
  return (
    <>
      <h1>Assignment 1</h1>
      <Button onClick={ (evt) => {
        loginState === "Login" ? setloginState("Logout") : setloginState("Login");
      }} variant="dark">{loginState}</Button>{' '}
    </>
  )
}

function Movie ( {props} ) {
  return (
    <>
      {props.movies.map( (name) => {
      return <MovieList props={name}></MovieList>
    })}
    </>
  );
}

function MovieList( {props} ) {
  return (
    <>
      <p>{props.name}</p>
      <p>{props.year}</p>
      <p>{props.rating}</p>
      <br></br>
    </>
  );
}


export default App;
