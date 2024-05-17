import Card from 'react-bootstrap/Card';
import Image from '../images/Blockbuster-Logo-1996-2014-removebg-preview.png';

function MovieList( {props} ) {
    return (
      <>
        <Card style={{ width: '200px', alignItems: 'center' }}>
          <Card.Img variant="top" src={Image} />
          <Card.Body>
            <Card.Title>{props.name}</Card.Title>
            <Card.Text>
              Release Date: {props.year}
              <br></br>
              Rating: {props.rating}
            </Card.Text>
          </Card.Body>
        </Card>
        <br></br>
      </>
    );
  }
  
  
  export default MovieList;