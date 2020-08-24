import React, { useState } from 'react';
import './App.css';
import Messages from './components/MessageList';
import Button from './components/Button';
import MessageModel from './models/Message';

function App() {
  const initItems: MessageModel[] = [
    {
      text: 'Message 1',
      id: '1',
      author: 'John Doe',
      date: new Date(),
    },
    {
      text: 'Message 2',
      id: '2',
    },
    {
      text: 'Message 3',
      id: '3',
      date: new Date(),
    },
  ];

  const [items, setItems] = useState(initItems);

  const clickCallback = () => {
    const id = items.length + 1;
    items.push({
      text: 'Message ' + id,
      id: id.toString(),
      author: 'John Doe',
      date: new Date(),
    });
    setItems([...items]);
  };

  return (
    <>
      <Messages items={items} />
      <hr />
      <Button text="Добавить сообщение" clickCallback={clickCallback} />
    </>
  );
}

export default App;
