
import './App.css';
import React, { useState } from 'react';
import { AddMessageButton } from './components/add-message-button';

/*
Реализовать возможность отправки нового сообщения с
   фиксированным текстом:
1. добавить кнопку;
2. обрабатывать нажатие на кнопку функцией, которая добавляет 
  в массив сообщений новое — например, с текстом «Нормально».
3. функция-обработчик также должна делать перерендер DOM’а, 
  чтобы новое сообщение не просто добавилось в массив, но и 
  появилось у пользователя на странице.
 */

function App() {
  const [messages, setMessages] = useState<string[]>([]);

  const addMessageToChat = (message: string) => setMessages(messages.concat([message]))

  return <>
    <div className="messages-block">
      {messages.map(q => <>
        <p>
          {q}
        </p>
      </>)}
    </div>
    <AddMessageButton onAddMessage={(message) => addMessageToChat(message)}></AddMessageButton>

  </>;
}

export default App;
