import 'bootstrap/dist/css/bootstrap.min.css';
import {Card} from 'react-bootstrap';

const ExperienceCard = () => {
  return (
    <Card>
      <Card.Body>
        <Card.Title style={{fontSize:'100px'}}>Card Experience</Card.Title>
        <Card.Text style={{fontSize:'50px'}}>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default ExperienceCard;