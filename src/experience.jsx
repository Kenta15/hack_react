import React, { useState } from 'react';
import { Button, Form, FormGroup, FormLabel, FormControl } from 'react-bootstrap';

const ExperienceForm = () => {
  const [comment, setComment] = useState('');
  const [posts, setPosts] = useState([]);

  const handleChange = (event) => {
    setComment(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setPosts([...posts, comment]);
    setComment('');
  }

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <h2>Your Experience:</h2>
        <FormGroup>
          <FormControl
            as="textarea"
            name="comment"
            id="comment"
            value={comment}
            onChange={handleChange}
          />
        </FormGroup>
        <Button type="submit">Post Comment</Button>
      </Form>
      <div>
        <h2>Your Posts:</h2>
        {posts.map((post, index) => (
          <div key={index}>
            <p>{post}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ExperienceForm;
