
import './App.css';
import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/scss/bootstrap.scss';
import { MessageModel } from './models/MessageModel';
import { UserModel } from './models/UserModel';
import { AuthorizationBlock } from './components/AuthorizationBlock';
import { MessageField } from './components/MessageField';
import { MessageCreate } from './components/MessageCreate';

/*
  1. Создать в папке components два компонента - MessageField и Message
      Компоненты Message должны быть вложены в MessageField
  2. Реализовать отправку сообщений по нажатию кнопки
  3. На каждое сообщение должен отвечать робот
  4. Добавить автора к сообщеням и отображать его в интерфейсе. Переделать логику ответа от робота в соответствии с этим
 */

function App() {



  const [author, setAuthor] = useState<UserModel>();

  const [messages, setMessages] = useState<MessageModel[]>([]);

  const updateMessages = (message: MessageModel) => {
    setMessages(messages.concat([message]));
    ;
  }

  useEffect(() => {

    if (!messages || !messages.length) {
      return;
    }

    const botMessageModel: MessageModel = {
      author: {
        id: 3,
        name: 'Bot'
      },
      text: 'Test bot text'
    }

    if (messages[messages.length - 1].author.id !== botMessageModel.author.id) {
      setTimeout(() => setMessages(messages.concat([botMessageModel])), 1000)
    }
  }, [messages]);

  const authorizeUser = (author: UserModel) => {
    setAuthor(author);
  }

  const renderAuthorization = () => {
    if (!!author) {
      return;
    }
    return <AuthorizationBlock onAuth={(author: UserModel) => authorizeUser(author)}></AuthorizationBlock>
  }

  const renderChat = () => {
    if (!author) {
      return;
    }
    return <>
      <Row>
        <Col></Col>
        <Col>
          <MessageField messages={messages}></MessageField>
        </Col>
        <Col></Col>
      </Row>
      <Row>
        <Col></Col>
        <Col>
          <MessageCreate author={author} onCreate={(message: MessageModel) => updateMessages(message)}></MessageCreate>
        </Col>
        <Col></Col>
      </Row>
    </>
  }

  return <Container className="margin-top">
    {renderAuthorization()}
    {renderChat()}
  </Container>;
}

export default App;
