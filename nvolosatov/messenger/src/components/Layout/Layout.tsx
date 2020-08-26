import React from "react";
import "./Layout.scss";
import { Header } from "../Header";
import { Footer } from "../Footer";
import { Messenger } from "../Messenger";
import { MessengerList } from "../MessengerList";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export function Layout() {
  return (
    <div className="layout">
      <div className="layout__header">
        <Header />
      </div>
      <div className="layout__body">
        <Container fluid={true}>
          <Row>
            <Col xs={4}>
              <MessengerList />
            </Col>
            <Col xs={8}>
              <Messenger />
            </Col>
          </Row>
        </Container>
      </div>
      <div className="layout__footer">
        <Footer />
      </div>
    </div>
  );
}
