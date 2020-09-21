import React from 'react';

import { Message } from './Message/Message';
import { Message as MessageType } from '../../../../logic/domain/ChatsService';


type Props = {
    items: Array<MessageType & {id:number}>
};

const Messages = ({items}: Props) => {

    const messages = items.map((item, index) => <Message message={item} key={ item.id } />);
    return (
    <div className="messages-container">
        <div className="messages">{messages}</div>
    </div>);
}

export { Messages };