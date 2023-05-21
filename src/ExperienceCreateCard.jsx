import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, Form, Button} from 'react-bootstrap';
import { useState } from 'react';
import axios from 'axios';

const ExperienceCreateCard = ({changePage}) => {

  const [content, setContent] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    axios.post('http://localhost:8000/api/post/', {
      content: content
    }).then(
      res => {
        console.log(res);
        changePage('Experience');
      }
    ).catch(
      err => {
        console.log(err);
      }
    )
    }

  const cardStyle = {
    'width': '50vw',
    'height':'fit-content',
    'border-bottom-left-radius':'5px',
   ' border-bottom-right-radius':'5px',
    'border-bottom-left-radius':0,
    'border-bottom-right-radius':0,
  };

  const bodyStyle = {
    width: "90%",
  };

  const labelStyle = {
    fontSize: "2rem",
    fontWeight: "bold",
  };

  const controlStyle = {
    fontSize: "1.5rem",
    marginTop: "10px",
    minHeight: "150px",
    width: "100%",
  };

  const buttonStyle = {
    fontSize: "1.5rem",
    width: "100%",
    marginTop: "20px",
  };

  return (
    <Card style={cardStyle}>
      <Card.Body style={bodyStyle}>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formContent">
            <Form.Label style={labelStyle}>Tell us about Your Experience</Form.Label>
            <Form.Control
              style={controlStyle}
              as="textarea"
              placeholder="Enter your experience here"
              value={content}
              onChange={e => setContent(e.target.value)}
            />
          </Form.Group>

          <Button style={buttonStyle} variant="dark" type="submit">
            <strong>Post</strong>
          </Button>
        </Form>
      </Card.Body>
    </Card>
  )
}

export default ExperienceCreateCard;
