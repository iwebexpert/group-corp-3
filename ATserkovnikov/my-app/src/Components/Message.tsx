import React from "react";
import "./Message.css";

function Message({Author, MessageText}: MessageData) {
    return (
        <div className={Author === "Бот" ? "message-bot" : "message-user"}>
            <b>{Author}</b>&nbsp;
            <span>{MessageText}</span>
        </div>)
}

export {Message}
