import Card from 'react-bootstrap/Card';

function MovieList( {props} ) {
    return (
      <>
        <Card style={{ width: '200px', alignItems: 'center' }}>
          <Card.Body>
            <Card.Title>{props.name}</Card.Title>
            <Card.Text>
              {props.year}
              <br></br>
              {props.rating}
            </Card.Text>
          </Card.Body>
        </Card>
        <br></br>
      </>
    );
  }
  
  
  export default MovieList;