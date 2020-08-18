import React from 'react';

type Props = {
    message: Message,
    author: {
        avatar: string,
        isMe: boolean;
    }
};

const Message = (props: Props) => {
    const {author, message} = props;
    const messageClasses = author.isMe ? 'chat' : 'chat chat-left';
    return <div className={messageClasses}>
        <div className="chat-avatar">
            <a className="avatar avatar-online" href="#">
                <img src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="..."/>
                <i></i>
            </a>
        </div>
        <div className="chat-body">
            <div className="chat-content">
                <p>Well, I am just looking around.</p>
                <time className="chat-time">11:39:57 am</time>
            </div>
        </div>
    </div>;
};

export { Message };

