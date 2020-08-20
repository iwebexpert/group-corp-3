import React from 'react';

export const Message: React.FC<MessageProps> = (props: MessageProps) => {
  return (
    <div>
      <h3>{props.text}</h3>
      <div>{props.author}</div>
    </div>
  );
};
