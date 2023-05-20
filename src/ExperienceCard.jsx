import 'bootstrap/dist/css/bootstrap.min.css';
import {Card} from 'react-bootstrap';
import axios from 'axios';
import { useEffect, useState } from 'react';

const ExperienceCard = () => {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/post').then(
      res => {
        setPosts(res.data);
      }
    ).catch(
      err => {}
    )
  },[])

  return (
    <Card>
      <Card.Body>
        <Card.Title style={{fontSize:'100px'}}>Card Experience</Card.Title>
        <Card.Text style={{fontSize:'50px'}}>
          {
            posts.map((post, index) => {
              return <p>{post.content}</p>
            })
          }
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default ExperienceCard;