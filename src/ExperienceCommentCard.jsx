import 'bootstrap/dist/css/bootstrap.min.css';
import {Card} from 'react-bootstrap';


const ExperienceCommentCard = ({content}) => {

  return (
    <div>
      <Card style={{marginTop: 0}}>
        <Card.Body style={{width:'100%'}}>
          <Card.Text style={{fontSize:'18px'}}>
            {content}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ExperienceCommentCard;
