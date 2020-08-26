type MessageEntity = {
  id: string;
  text: string;
  author: string;
  created: Date;
  fromBot?: boolean;
};

type MessageListProps = {
  messages: MessageEntity[];
  removedMessage: (index: number) => void;
};

type NewMessageProps = {
  createdMessage: (MessageEntity) => void;
};

type MessageProps = {
  message: MessageEntity;
  removedMessage: () => void;
};
