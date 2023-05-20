import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Container} from 'react-bootstrap';

import HomeCard from './HomeCard';
import ExperienceCard from './ExperienceCard';

const App = () => {
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
          <Navbar.Brand>Home</Navbar.Brand>
          <Navbar.Brand>Experience</Navbar.Brand>
          <Navbar.Brand>Practice</Navbar.Brand>
          <Navbar.Brand>Resources</Navbar.Brand>
        </Container>
      </Navbar>

      <HomeCard />
      <ExperienceCard />
    </div>
  );
}

export default App;
