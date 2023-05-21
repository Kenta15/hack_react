import 'bootstrap/dist/css/bootstrap.min.css';
import {useState, useEffect} from 'react'
import {Navbar, Container} from 'react-bootstrap';

import HomeCard from './HomeCard';
import ExperienceCard from './ExperienceCard';
import Think from './Think';

const App = () => {
  const [pageState, setpageState] = useState('Home')

  useEffect(() => {
    console.log(pageState)
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
          <Navbar.Brand style={{cursor:'pointer'}} onClick = {() => setpageState('Home')}>Home</Navbar.Brand>
          <Navbar.Brand style={{cursor:'pointer'}} onClick = {() => setpageState('Experience')}>Experience</Navbar.Brand>
          <Navbar.Brand style={{cursor:'pointer'}} onClick = {() => setpageState('Think')}>Think</Navbar.Brand>
        </Container>
      </Navbar>

      { pageState == 'Home' && <HomeCard />}
      { pageState == 'Experience' && <ExperienceCard />}
      { pageState == 'Think' && <Think />}

    </div>
  );
}

export default App;
