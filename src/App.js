import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Container, Card} from 'react-bootstrap';

function App() {
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

      <Card card>
        <Card.Body>
          <Card.Title style={{fontSize:'100px'}}>Card Title</Card.Title>
          <Card.Text style={{fontSize:'50px'}}>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default App;
