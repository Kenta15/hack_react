import {useState, useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'react-bootstrap';
import axios from 'axios';
import ExperiencePostCard from './ExperiencePostCard';

const ExperienceCard = ({changePage}) => {

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

  return (
    <>
    <style type="text/css">
      {`
        .card{
          width:50vw;
          height:fit-content;
          border-bottom-left-radius:5px;
          border-bottom-right-radius:5px;
          border-bottom-left-radius:0;
          border-bottom-right-radius:0;
        }
        .comment{
          border:1px solid #DCDCDC;
          width:50vw;
          height:50px;
          margin:auto;
          border-bottom-left-radius:5px;
          border-bottom-right-radius:5px;
        }
        .icons{
          display:flex;
          align-items:left;
        }
        .view, .chat{
          display:inline-block;
          margin-right:8px;
        }
        .new_post {
          display: flex;
          width:50vw;
          margin: auto;
          margin-top: 50px;
        }
      `}
      </style>
      <Button className='new_post' onClick={() => changePage('NewPost')}>New Post</Button>
    {
      posts.map((post, index) => {
        return (
          <ExperiencePostCard key={index} post_id={post.id} content={post.content} view_count={1000} comment_num={0}/>
          )
        }
      )
    }
    </>
  );
}

export default ExperienceCard;
