import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, Form, Button} from 'react-bootstrap';
import { useState } from 'react';

const ExperienceCard = () => {
  const [content, setContent] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(content);
    // サーバーにデータを送信する処理を書く
    setContent('');
  }

  return (
    <Card>
      <Card.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formContent">
            <Form.Label>Your Experience</Form.Label>
            <Form.Control
              as="textarea"
              placeholder="Enter card text"
              value={content}
              onChange={e => setContent(e.target.value)}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Post
          </Button>
        </Form>
      </Card.Body>
    </Card>
  )
}

export default ExperienceCard;
