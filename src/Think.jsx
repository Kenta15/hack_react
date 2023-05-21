import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Exercise = () => {
    return (
      <div className="App">
        

    <Container>
        <Row className="p-5 m-3">
          <Col>
          <h3>Engaging with people of different cultures– 別の文化の人の扱い方</h3>
        <ul>
          <li>henken dame da yo</li>
        </ul>
          </Col>
      <Col></Col>
        </Row>


        <Row className="p-5 m-3">
          <Col>
          </Col>
          <Col>
          <h3>Engaging with people that disagree– 反対する人の扱い方</h3>
        <ul>
          <li>Have the goal of mutual understanding</li>
          <li>Ask meaningful questions</li>
          <li>Avoid needless debate</li>
        </ul>
          </Col>
        </Row>

        <Row className="p-5 m-3">
        <h3>Remove biases– 偏見を捨てろ</h3>
        <ul>
          <li>Notice premature judgements</li>
          <li>??</li>
          <li>??</li>
        </ul>
        </Row>


        <Row className="p-5 m-3">
        <Col>
          </Col>
          <Col>
        <h3>Be self-aware– 自覚しろ</h3>
        <ul>
          <li>Think about how your actions affect others</li>
          <li>Try meditation</li>
          <li>??</li>
        </ul>
      </Col>
      </Row>

      </Container>

      </div>
    );
  }
  
  export default Exercise;