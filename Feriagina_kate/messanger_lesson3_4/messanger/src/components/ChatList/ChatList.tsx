import React from "react";
import ListGroup from 'react-bootstrap/ListGroup';
import './ChatList.css';

export const ChatList: React.FC<{}> = () => {  
  return (
    <div className = "chat_list">
        <ListGroup>
        <ListGroup.Item>Chat uno</ListGroup.Item>
        <ListGroup.Item>Chat dos</ListGroup.Item>
        </ListGroup>
    </div>
  );
}