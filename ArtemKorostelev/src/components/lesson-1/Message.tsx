import React from 'react';

type Props = {
    text: string
};

const Message = ({ text }: Props) => <div>{text}</div>;

export { Message };
