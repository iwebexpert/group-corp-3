import React from "react";
import {Row, Container, Col, Button, Card, Accordion} from "react-bootstrap";
import {Link} from "react-router-dom";
import {ChatForm} from "./ChatForm";

import './ChatList.scss'
import {useSelector} from "react-redux";
import {AppState} from "../../reducers";

export const ChatList: React.FC = () => {
    const chatsDB = useSelector((state:AppState) => state.chats);

    const chats = chatsDB.entries.map((item: Chat) => {
        return (<Card key={item.id.toString()}>
            <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey={item.id.toString()}>
                    <Link to={`/chat/${item.id}`}>{item.title}</Link>
                </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey={item.id.toString()}>
                <Card.Body className="p-0">
                    <Card>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>{item.title}</Card.Title>
                            <Card.Text>
                                {item.description}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Card.Body>
            </Accordion.Collapse>
        </Card>);
    });

    return (
        <Container className="p-0">
            <Row>
                <Col>
                    <Accordion defaultActiveKey="0">
                        {chats}
                    </Accordion>
                </Col>
            </Row>
            <Row>
                <Col>
                    <ChatForm/>
                </Col>
            </Row>
        </Container>
    );
};
