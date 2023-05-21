import {useState, useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, Form, Button} from 'react-bootstrap';
import { Chat, Eye } from 'react-bootstrap-icons';
import axios from 'axios';


const ExperiencePostCard = ({post_id, content, view_count, comment_num}) => {

  const useCbOnce = (cb) => {
    const [called, setCalled] = useState(false);

    // Below can be wrapped in useCallback whenever re-renders becomes a problem
    return (e) => {
        if (!called) {
            setCalled(true);
            cb(e);
        }
    }
  }

  const [numComment, setNumComment] = useState(comment_num);


  const expandComment = () => {
    if(numComment > 0){
      console.log('expanded')
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
          console.log(res);
          setNumComment(prev => prev +1);
          // remove value
          e.target[0].value = '';
        }
      ).catch(
        err => {
          console.log(err);
        }
      )
  });


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
        <Card.Body style={{width:'100%'}}>
          <Card.Text style={{fontSize:'18px'}}>
            {content}
          </Card.Text>
          <div class="icons">
            <div className="view">
              <Eye style={{width:'20px', height:'20px', marginRight:'5px'}}/>
              <span>{view_count}</span>
            </div>
            <div className="chat">
              <Chat style={{width:'20px', height:'20px', marginRight:'5px'}} onClick = {() => expandComment()}/>
              <span>{numComment}</span>
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

      </div>
    </div>
  );
}

export default ExperiencePostCard;
