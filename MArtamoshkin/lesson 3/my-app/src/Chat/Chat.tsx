import React from "react";
import { CreateMessage } from "./CreateMessage";

import './Chat.css';
import { MessagesList } from './MessagesList';

const Chat = () => {
    return (<>
        <div className="container">
            <div className="col-xs-12 col-md-offset-2">
                <div className="panel-heading">
                    <h2 className="panel-title pb-3">
                        boto<span
                        className="badge badge-secondary" style={{background: 'orange', color: 'black'}}>chat</span>
                    </h2>
                </div>
                <div className="panel chat-box card p-3" id="chat">

                    <div className="panel-body">
                        <div className="chats">
                            <MessagesList/>
                            <div className="chat">
                                <div className="chat-avatar">
                                    <a className="avatar avatar-online" href="#" data-placement="right" title=""
                                       data-original-title="June Lane">
                                        <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="..."/>
                                        <i></i>
                                    </a>
                                </div>
                                <div className="chat-body">
                                    <div className="chat-content">
                                        <p>
                                            Good morning, sir.
                                            <br/>What can I do for you?
                                        </p>
                                        <time className="chat-time">11:37:08 am</time>
                                    </div>
                                </div>
                            </div>
                            <div className="chat chat-left">
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
                            </div>
                            <div className="chat">
                                <div className="chat-avatar">
                                    <a className="avatar avatar-online">
                                        <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="..."/>
                                        <i></i>
                                    </a>
                                </div>
                                <div className="chat-body">
                                    <div className="chat-content">
                                        <p>
                                            If necessary, please ask me.
                                        </p>
                                        <time className="chat-time">11:40:10 am</time>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="panel-footer">
                        <CreateMessage onSend={(e) => {
                            console.log(e);
                        }}/>
                    </div>
                </div>
            </div>
        </div>
    </>);
};

export { Chat };
