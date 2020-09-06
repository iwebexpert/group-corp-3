import React from "react";
import { Messenger } from "../Messanger";
import { ChatList } from "../ChatList";
import {Header} from '../Header';
import {Footer} from '../Footer';
import { ModalSettings } from "../ModalSettings";
import './Layout.css';
import {Container, Row, Col} from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

export function Layout() {
  
  return (
    <>
      <Container fluid>
        <Row>
          <Col md={2}>
            <Header />
          </Col>
          <Col md={2}>
            <ModalSettings />
          </Col>
        </Row>
          <Row>
          <Col md={3}>
            <ChatList />
          </Col>
          <Col md={9}>
            <Messenger />
          </Col>
        </Row>
        <Row>
          <Col>
            <Footer />
          </Col>
        </Row>
      </Container>      
      
    </>
  );
}