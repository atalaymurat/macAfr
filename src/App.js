import React from 'react';
import './App.css';
import CategoryList from './components/CategoryList';
import Navbar from './components/NavBar';
import MachineList from './components/MachineList';
import {Row, Col, Container} from 'reactstrap';

function App() {
  return (
    <div>
      <Navbar />
      <Container>
        <h2>machineafrica.com</h2>
        <Row>
          <Col xs="4">
            <CategoryList />
          </Col>
          <Col xs="8">
            <MachineList />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
