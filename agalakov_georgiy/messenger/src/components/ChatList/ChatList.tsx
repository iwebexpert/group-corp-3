import React from 'react';
import ListGroup from 'react-bootstrap/esm/ListGroup';

const ChatList: React.FC<{}> = () => {
    return (
        <div>
            <ListGroup variant="flush">
                <ListGroup.Item variant="primary">naruto</ListGroup.Item>
                <ListGroup.Item>Dwight Schrute</ListGroup.Item>
                <ListGroup.Item>Morbius</ListGroup.Item>
                <ListGroup.Item>Pem</ListGroup.Item>
                <ListGroup.Item>Mikle</ListGroup.Item>
                <ListGroup.Item>Jim</ListGroup.Item>
                <ListGroup.Item></ListGroup.Item>
            </ListGroup>
        </div>
    )
}

export default ChatList;