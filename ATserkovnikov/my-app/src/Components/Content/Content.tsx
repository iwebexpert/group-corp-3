import React from 'react';
import {ChatList} from '../ChatList';
import {MessageList} from '../MessageList';

import './Content.scss'

export class Content extends React.Component {
    render() {
        const messages: MessagesListProps = {authors: [], messages: []};

        return (
            <>
                <div className="container">
                    <div className="chat-block">
                        <ChatList/>
                    </div>

                    <div className="content-block">
                        <MessageList authors={messages.authors} messages={messages.messages} />
                    </div>
                </div>
            </>
        );
    }
}
