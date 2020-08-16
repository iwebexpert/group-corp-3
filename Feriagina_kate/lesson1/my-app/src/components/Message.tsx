import React from 'react';

type Props = {
    text: string,
    author?: string,
};

const Message = ({ text, author = 'Test author' }: Props) => { return <div>Message: {text} - {author}</div> };

export { Message };