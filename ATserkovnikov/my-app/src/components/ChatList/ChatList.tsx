import React from "react";
import {Row, Container, Col, Button, Card, Accordion} from "react-bootstrap";
import {Link} from "react-router-dom";
import {inject, observer} from "mobx-react";
import ChatForm from "./ChatForm/ChatForm";
import {ChatStore} from "../../stores";

import './ChatList.scss'

type ChatListProps = {
    chats?: ChatStore;
    match?: any;
}

@inject('chats')
@observer
export default class ChatList extends React.Component<ChatListProps> {

    render() {
        const chats = this.props.chats?.chats.map((item: Chat) => {
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
                        <Accordion defaultActiveKey={this.props.match.params.id}>
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
    }
};
