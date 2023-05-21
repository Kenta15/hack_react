import {useState, useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import ExperiencePostCard from './ExperiencePostCard';

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
    posts.map((post, index) => {
      return (
        <ExperiencePostCard key={index} post_id={post.id} content={post.content} view_count={1000} comment_num={0}/>
      )
    })
  );
}

export default ExperienceCard;
