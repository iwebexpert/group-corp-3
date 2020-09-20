import React from "react";
import './ChatList.scss'
import {Row, Container, Col, Accordion} from "react-bootstrap";
import {ChatForm} from "./ChatForm";
import {useSelector} from "react-redux";
import {AppState} from "../../reducers";
import {ChatItem} from "./ChatItem";

export const ChatList: React.FC = () => {
    const chatsDB = useSelector((state:AppState) => state.chats);

    const chats = chatsDB.entries.map((item: Chat) => (
        <ChatItem key={item.id}
                  id={item.id}
                  description={item.description}
                  title={item.title}
                  messages={item.messages}
                  unreadMessageCount={item.unreadMessageCount}
        />));

    return (<Container className="p-0">
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
