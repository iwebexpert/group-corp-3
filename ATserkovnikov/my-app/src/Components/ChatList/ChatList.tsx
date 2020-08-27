import React from "react";
import {Row, Container, Col, Button, Card, Accordion} from "react-bootstrap";
import './ChatList.scss'

export const ChatList: React.FC = () => {
    return (
        <Container className="p-0">
            <Row>
                <Col>
                    <Accordion defaultActiveKey="0">
                        <Card>
                            <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                    Чат 1
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="0">
                                <Card.Body>
                                    <Card style={{ width: '18rem' }}>
                                        <Card.Img variant="top" src="holder.js/100px180" />
                                        <Card.Body>
                                            <Card.Title>Чат 1</Card.Title>
                                            <Card.Text>
                                                Описание..
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="1">
                                    Чат 2
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="1">
                                <Card.Body>
                                    <Card style={{ width: '18rem' }}>
                                        <Card.Img variant="top" src="holder.js/100px180" />
                                        <Card.Body>
                                            <Card.Title>Чат 2</Card.Title>
                                            <Card.Text>
                                                Описание..
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                </Col>
            </Row>
        </Container>
    );
};
