import {useState, useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, Form, Button} from 'react-bootstrap';
import { Chat, Eye } from 'react-bootstrap-icons';
import axios from 'axios';

const ExperienceCard = () => {

  const [numComment, setNumComment] = useState(0);

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

  useEffect(() => {
    console.log(numComment)
  }, [numComment]);

  const expandComment = () => {
    if(numComment > 0){
      console.log('expanded')
    }
  }
  return (
    <div>
      <style type="text/css">
          {`
            .card{
              width:50vw;
              height:fit-content;
              border-bottom-left-radius:0;
              border-bottom-right-radius:0;
            }
            .comment{
              border:1px solid #DCDCDC;
              width:50vw;
              height:50px;
              margin:auto;
              border-bottom-left-radius:3px;
              border-bottom-right-radius:3px;
            }
            .icons{
              display:flex;
              align-items:left;
            }
            .view, .chat{
              display:inline-block;
              margin-right:8px;
            }
          `}
        </style>
      <Card>
        <Card.Body>
          <Card.Text style={{fontSize:'18px'}}>
            With supporting text below as a natural lead-in to additional content.
            With supporting text below as a natural lead-in to additional content.
            With supporting text below as a natural lead-in to additional content.
            With supporting text below as a natural lead-in to additional content.
          </Card.Text>
          <div class="icons">
            <div className="view">
              <Eye style={{width:'20px', height:'20px', marginRight:'5px'}}/>
              <span>1000</span>
            </div>
            <div className="chat">
              <Chat style={{width:'20px', height:'20px', marginRight:'5px'}} onClick = {() => expandComment()}/>
              <span>{numComment}</span>
            </div>
          </div>
        </Card.Body>
      </Card>
      <div className="comment">
        <Form style={{marginTop:'5px', marginLeft:'5px'}}>
          <Form.Group className="mb-3" controlId="formBasicEmail" style={{width:'80%', display:'inline-block', marginRight:'10px'}}>
            <Form.Control type="text" placeholder="Comment" style={{borderRadius:'50px'}}/>
          </Form.Group>
          <Button variant="primary" type="submit" style={{width: '15%', borderRadius:'50px'}}>
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default ExperienceCard;
