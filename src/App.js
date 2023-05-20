import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Container, Card} from 'react-bootstrap';
import {useState, useEffect} from 'react'
import React from 'react'

function App() {
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
          <Navbar.Brand onClick = {() => setpageState('Home')}>Home</Navbar.Brand>
          <Navbar.Brand onClick = {() => setpageState('Experience')}>Experience</Navbar.Brand>
          <Navbar.Brand onClick = {() => setpageState('Practice')}>Practice</Navbar.Brand>
          <Navbar.Brand onClick = {() => setpageState('Resources')}>Resources</Navbar.Brand>
        </Container>
      </Navbar>

      { pageState == 'Home' && <Home />}
      { pageState == 'Experience' && <Experience />}
      { pageState == 'Practice' && <Practice />}
      { pageState == 'Resources' && <Resources />}
    </div>
  );
}

export default App;
