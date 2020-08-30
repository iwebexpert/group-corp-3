import React from 'react';
import {ItemWithId, MessagesProps} from '../types/types';
import {Message} from '../Message/Message';

export const Messages: React.FC<MessagesProps> = ({items}) => {

    const renderMessages = (items: any): any => {
        return items.map((item: string | ItemWithId, index: number) => {
            if (typeof item === 'string') {
                return <li
                    className="list-group-item" key={index}>
                    {item}
                </li>
            } else {
                return <Message key={index} {...item}/>
            }
        });
    }
    return (
        <React.Fragment>
            <ul className="list-group mb-4">
                {renderMessages(items)}
            </ul>
        </React.Fragment>
    )
}

export default Messages;
