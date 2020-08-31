import React from 'react';
import './App.css';
import { Lesson2Component } from './lesson2/Lesson2Component';
import { Lesson1Component } from './lesson1/Lesson1Component';
import { Row, Col } from 'react-bootstrap';

function App() {
  return (
    <Row>
      <Col md={6}>
        <h2>1 Функции</h2>
        <Lesson1Component /> 
      </Col>
      <Col md={6}>
      <h2>2 Классы</h2>
        <Lesson2Component />
      </Col>
    </Row>
  );
}

export default App;
