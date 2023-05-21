import 'bootstrap/dist/css/bootstrap.min.css';
import {useState, useEffect} from 'react'
import {Navbar, Container} from 'react-bootstrap';

import HomeCard from './HomeCard';
import ExperienceCard from './ExperienceCard';
import ExperienceCreateCard from './ExperienceCreateCard';

const App = () => {
  const [pageState, setpageState] = useState('Home')

  const pages = [
    {
      pageName: 'Home',
      text: 'Home'
    },
    {
      pageName: 'Experience',
      text: 'Experience'
    },
    {
      pageName: 'Practice',
      text: 'Practice'
    },
    {
      pageName: 'Resources',
      text: 'Resources'
    }
  ]

  useEffect(() => {
  }, [pageState]);

  return (
    <div className="App">
      <style type="text/css">
        {`
          .card{
            width:80vw;
            height:80vh;
            display:flex;
            justify-content:center;
            align-items:center;
            text-align:center;
            margin:auto;
            margin-top:30px;
          }
        `}
      </style>
      <Navbar bg="light" expand="lg">
        <Container>
          {/* TODO: make it pointer on hover */}
          <Navbar.Brand onClick = {() => setpageState('Home')}>Home</Navbar.Brand>
          <Navbar.Brand onClick = {() => setpageState('Experience')}>Experience</Navbar.Brand>
          <Navbar.Brand onClick = {() => setpageState('Practice')}>Practice</Navbar.Brand>
          <Navbar.Brand onClick = {() => setpageState('Resources')}>Resources</Navbar.Brand>
        </Container>
      </Navbar>

      { pageState == 'Home' && <HomeCard />}
      { pageState == 'Experience' && <ExperienceCard />}
      { pageState == 'Experience' && <ExperienceCreateCard />}
      {/* { pageState == 'Practice' && <Practice />}
      { pageState == 'Resources' && <Resources />} */}

    </div>
  );
}

export default App;
