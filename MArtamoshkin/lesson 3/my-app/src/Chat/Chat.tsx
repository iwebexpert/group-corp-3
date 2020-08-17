import { MessagesList } from "./MessagesList";
import React from "react";
import { CreateMessage } from "./CreateMessage";

import './Chat.css';

const Chat = () => {

    return (<>
        <div className="container bootstrap snippets">
            <div className="col-xs-12 col-md-offset-2">
                <div className="panel chat-box" id="chat">
                    <div className="panel-heading">
                        <h3 className="panel-title border-bottom    ">
                            <i className="icon wb-chat-text" aria-hidden="true"></i> Chat
      </h3>
                    </div>
                    <div className="panel-body">
                        <div className="chats">
                            <div className="chat">
                                <div className="chat-avatar">
                                    <a className="avatar avatar-online" href="#" data-placement="right" title="" data-original-title="June Lane">
                                        <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="..." />
                                        <i></i>
                                    </a>
                                </div>
                                <div className="chat-body">
                                    <div className="chat-content">
                                        <p>
                                            Good morning, sir.
                <br />What can I do for you?
              </p>
                                        <time className="chat-time">11:37:08 am</time>
                                    </div>
                                </div>
                            </div>
                            <div className="chat chat-left">
                                <div className="chat-avatar">
                                    <a className="avatar avatar-online" href="#" >
                                        <img src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="..." />
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
                                    <a className="avatar avatar-online" >
                                        <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="..." />
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
                        <form>
                            <div className="input-group">
                                <input type="text" className="form-control" placeholder="Say something" />
                                <span className="input-group-btn">
                                    <button className="btn btn-primary" type="button">Send</button>
                                </span>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </>)
}

export { Chat };