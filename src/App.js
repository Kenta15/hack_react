import 'bootstrap/dist/css/bootstrap.min.css';
import {useState, useEffect} from 'react'
import {Navbar, Container} from 'react-bootstrap';

import HomeCard from './HomeCard';
import ExperienceCard from './ExperienceCard';
import ExperienceCreateCard from './ExperienceCreateCard';
import Think from './Think';

const App = () => {
  const [pageState, setPageState] = useState('Home')

  useEffect(() => {
  }, [pageState]);

  const changePage = (newPage) => {
    setPageState(newPage)
  }

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
          <Navbar.Brand style={{cursor:'pointer'}} onClick = {() => setPageState('Home')}>Home</Navbar.Brand>
          <Navbar.Brand style={{cursor:'pointer'}} onClick = {() => setPageState('Experience')}>Experience</Navbar.Brand>
          <Navbar.Brand style={{cursor:'pointer'}} onClick = {() => setPageState('Think')}>Think</Navbar.Brand>
        </Container>
      </Navbar>

      { pageState == 'Home' && <HomeCard />}
      { pageState == 'Experience' && <ExperienceCard changePage={changePage} />}
      { pageState == 'NewPost' && <ExperienceCreateCard />}
      { pageState == 'Think' && <Think />}


      <df-messenger
      df-cx="true"
      location="us-west1"
      chat-title="Empath"
      agent-id="a8e6d324-67df-40c5-919a-970dfccf6128"
      language-code="en"
    ></df-messenger>

    </div>
  );
}

export default App;
