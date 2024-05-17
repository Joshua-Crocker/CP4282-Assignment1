import MovieList from './MovieList';

function Movie ( {props} ) {
    return (
      <>
        {props.movies.map( (name) => {
        return <MovieList props={name}></MovieList>
      })}
      </>
    );
  }
  
  export default Movie;
  