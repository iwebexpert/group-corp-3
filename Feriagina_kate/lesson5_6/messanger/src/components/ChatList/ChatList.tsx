import React from "react";
import ListGroup from 'react-bootstrap/ListGroup';
import './ChatList.css';

export const ChatList: React.FC<{}> = () => {  
  return (
    <>
        <ListGroup>
          <ListGroup.Item>Chat uno</ListGroup.Item>
          <ListGroup.Item>Chat dos</ListGroup.Item>
        </ListGroup>
    </>
  );
}