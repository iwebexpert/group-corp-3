import React from "react";
import { MessageField } from "../MessageField/MessageField";
import { useTranslation } from "react-i18next";

const MessagesList = (props: MessagesListProps) => {
    const { messages, contactPerson } = props;
    const { t } = useTranslation();

    return (<>
        {(!messages || !messages.length) && <h5 className="text-center no-messages">{t('NO_MESSAGES')}</h5>}

        {messages.map((item: Message, index: number) =>
            <MessageField key={new Date(item.date).getDate() + index} message={item} contactPerson={contactPerson} />)}
    </>);
};

export { MessagesList };
