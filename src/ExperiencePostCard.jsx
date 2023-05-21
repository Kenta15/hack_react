import {useState, useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, Form, Button} from 'react-bootstrap';
import { Chat, Eye } from 'react-bootstrap-icons';
import axios from 'axios';
import ExperienceCommentCard from './ExperienceCommentCard';


const ExperiencePostCard = ({post_id, content, view_count, comment_num}) => {

  const useCbOnce = (cb) => {
    // Below can be wrapped in useCallback whenever re-renders becomes a problem
    return (e) => {
      cb(e);
    }
  }

  const [numComment, setNumComment] = useState(comment_num);
  const [isOpen, setIsOpen] = useState(false);
  const [comments, setComments] = useState([]);

  const expandComment = () => {
    if (!isOpen){
      axios.get(`http://localhost:8000/api/comment?post_id=${post_id}`).then(
        res => {
          setComments(res.data);
          setIsOpen(true);
        }
      ).catch(
        err => {}
      )
    }else{
      setComments([]);
      setIsOpen(false);
    }
  }

  const handleSubmit = useCbOnce((e) => {
    e.preventDefault();
    const comment = e.target[0].value;
    if (comment === '') {
      return;
    }

    axios.post('http://localhost:8000/api/comment/', {
      content: comment,
      post_id: post_id,
    }).then(
      res => {
        setComments(prev => [res.data, ...prev]);
        setNumComment(prev => prev +1);
        // remove value
        e.target[0].value = '';
        setIsOpen(true);
      }
      ).catch(
        err => {
          console.log(err);
        }
      )

  });


  return (
    <div>
      <Card>
        <Card.Body style={{width:'100%'}}>
          <Card.Text style={{fontSize:'18px'}}>
            {content}
          </Card.Text>
          <div class="icons">
            <div className="view">
              <Eye style={{width:'20px', height:'20px', marginRight:'5px'}}/>
              <span>{view_count}</span>
            </div>
            <div className="chat" onClick={expandComment}>
              <Chat style={{width:'20px', height:'20px', marginRight:'5px'}} />
              {/* <span>{numComment}</span> */}
            </div>
          </div>
        </Card.Body>
      </Card>
      <div className="comment">
        <Form style={{marginTop:'5px', marginLeft:'5px'}} onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail" style={{width:'80%', display:'inline-block', marginRight:'10px'}}>
            <Form.Control type="text" placeholder="Comment" style={{borderRadius:'50px'}}/>
          </Form.Group>
          <Button variant="primary" type="submit" style={{width: '15%', borderRadius:'50px'}}>
            Submit
          </Button>
        </Form>
      </div>
      <div className='commentView'>
        {comments.map((comment, index) => {
          return <ExperienceCommentCard key={index} content={comment.content} />
        })
        }
      </div>
    </div>
  );
}

export default ExperiencePostCard;
