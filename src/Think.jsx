import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React, {useEffect, useState} from 'react';
import { Justify } from 'react-bootstrap-icons';

const Exercise = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 500);
      return () => clearTimeout(timer);
    }, []);

    return (
      <div className="App">
        

        <Row className="p-5, m-3">      <h2 className="text-center p-3">Reflect on past experiences to move onto a brighter future</h2>  </Row>
    <Container style={{opacity: isVisible ? 1 : 0, transition: 'opacity 1s ease-in-out',}}>
      

        <Row className="p-5 m-3">
          <Col> 
          <h3>Engaging with people of different cultures– 別の文化の人の扱い方</h3>
        <ul style={{fontSize:"20px"}} >
          <li>Keep an open mind</li>
          <li>Understand context</li>
          <li>Share openly</li>
        </ul>
          </Col>
      <Col></Col>
        </Row>


        <Row className="p-5 m-3">
          <Col>
          </Col>
          <Col>
          <h3>Engaging with people that disagree– 反対する人の扱い方</h3>
        <ul style={{fontSize:"20px"}}>
          <li>Have the goal of mutual understanding</li>
          <li>Ask meaningful questions</li>
          <li>Avoid needless debate</li>
        </ul>
          </Col>
        </Row>

        <Row className="p-5 m-3">
        <h3>Remove biases– 偏見を捨てろ</h3>
        <ul style={{fontSize:"20px"}}>
          <li>Notice premature judgements</li>
          <li>Understand your way of thinking</li>
        </ul>
        </Row>


        <Row className="p-5 m-3">
        <Col>
          </Col>
          <Col>
        <h3>Be self-aware– 自覚しろ</h3>
        <ul style={{fontSize:"20px"}}>
          <li>Think about how your actions affect others</li>
          <li>Try meditation</li>
        </ul>
      </Col>
      </Row>

      </Container>

      </div>
    );
  }
  
  export default Exercise;