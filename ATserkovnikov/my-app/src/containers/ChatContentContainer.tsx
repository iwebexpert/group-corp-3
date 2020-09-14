import React from "react";
import {MessageList} from "../components/MessageList";
import {inject, observer} from "mobx-react";
import {ChatStore} from "../stores";

type ChatContentContainerProps = {
    chats?: ChatStore;
    match?: any;
}

@inject('chats')
@observer
export default class ChatContentContainer extends React.Component<ChatContentContainerProps> {

    updateChatDB = (data: MessagesListData): void => {
        if (this.props.chats?.addMessages){
            this.props.chats?.addMessages(data);
        }
    };

    render() {
        const messages = this.props.chats?.chats.filter(c => c.id === +this.props.match.params.id)[0]?.messages;
        if (messages) {
            return <MessageList messages={messages} updateChatDB={this.updateChatDB}/>
        } else {
            return <div>Нет сообщений</div>
        }
    }
};
