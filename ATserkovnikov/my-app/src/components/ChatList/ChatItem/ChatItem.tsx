import React, {useState} from "react";
import './ChatItem.scss'
import {Accordion, Button, Card, Col, Row} from "react-bootstrap";
import {push} from "connected-react-router";
import {useDispatch} from "react-redux";
import {changeChat, removeChat} from "../../../actions/chats";

export const ChatItem: React.FC<Chat> = (chat: Chat) => {
    const [curChat] = useState(chat);
    const dispatch = useDispatch();

    const setChatHandler = () => {
        dispatch(push(`/chat/${curChat.id}`));
        dispatch(changeChat(curChat.id));
    };

    const removeChatHandler = () => {
        dispatch(removeChat(curChat.id));
    };

    const unreadMess = chat.messages.unreadMessageCount > 0 ?
        (<div className="chat-num">{chat.messages.unreadMessageCount}</div>) : "";

    return (
    <Card key={chat.id.toString()}>
        <Card.Header>
            <Accordion.Toggle as={Button} onClick={setChatHandler} variant="button" eventKey={chat.id.toString()}>
                <Row className="justify-content-sm-center">
                    <Col>
                        {chat.title}
                    </Col>
                    <Col md={1}>{unreadMess}</Col>
                </Row>
            </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey={chat.id.toString()}>
            <Card.Body className="p-0">
                <Card>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>
                            <p>{chat.title}
                                <button type="button" className="close" aria-label="Close" onClick={removeChatHandler}>
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </p>

                        </Card.Title>
                        <Card.Text>
                            {chat.description}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Card.Body>
        </Accordion.Collapse>
    </Card>);
};
