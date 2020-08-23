import React, { ReactElement } from 'react';

import { Message } from './Message/Message';
import { MessageData } from '../../../../logic/domain/MessageData';

type Props = {
    items: MessageData[]
};

function Messages({items}: Props): ReactElement{

    const messages = items.map((item, index) => <Message message={item} key={ index } />);
    return (
    <div className="messages-container">
        <div className="messages">{messages}</div>
    </div>);
}

export { Messages };