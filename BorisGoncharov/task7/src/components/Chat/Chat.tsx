import React, { FC, useEffect, useState } from 'react';
import './Chat.scss';
import { Header } from '../Header';
import { ChatList } from '../ChatList';
import { Messenger } from '../Messenger';
import { Col, Container, Row } from 'react-bootstrap';
import { SettingsModal } from '../SettingsModal';
import { chatsData } from '../../helpers/chatsData';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { SettingsProviderWrapper } from '../../providers/SettingsProvider';

export const Chat: FC<{}> = () => {
  const [chats, setChats] = useState<Chat[]>(chatsData);
  const [activeChatId, setActiveChatId] = useState<string>('0');
  const [messages, setMessages] = useState<Message[]>(chats[0].messages);
  const [settingsModalVisible, setSettingsModalVisible] = useState<boolean>(
    false
  );

  useEffect(() => {
    const foundMessages =
      chats.find((chat) => chat.id === activeChatId)?.messages ||
      chats[0].messages;
    setMessages(foundMessages);
  }, [chats, activeChatId]);

  const handleChatSelect = (chatId: string) => () => {
    setActiveChatId(chatId);
  };

  const handleMessageSend = (message: Message): void => {
    const updatedChats = chats.map((chat) => {
      if (chat.id === message.chatId) {
        chat.messages = chat.messages.concat(message);
      }
      return chat;
    });
    setChats(updatedChats);
  };

  const handleMessageClose = (id: string): void => {
    const updatedChats = chats.map((chat) => {
      if (chat.id === activeChatId) {
        chat.messages = chat.messages.filter((message) => message.id !== id);
      }
      return chat;
    });
    setChats(updatedChats);
  };

  const handleSettingsButtonClick = (): void => {
    setSettingsModalVisible(true);
  };

  const handleSettingsModalClose = (): void => {
    setSettingsModalVisible(false);
  };

  return (
    <SettingsProviderWrapper>
      <BrowserRouter>
        <Container>
          <Col className="p-0 shadow-lg">
            <Header onSettingsButtonClick={handleSettingsButtonClick} />

            <Row noGutters>
              <Col md="3" className="bg-secondary">
                <ChatList
                  chats={chats}
                  onChatSelect={handleChatSelect}
                  activeChatId={activeChatId}
                />
              </Col>

              <Col md="9">
                <Switch>
                  <Route path={`/:chatId`} exact>
                    <Messenger
                      messages={messages}
                      onMessageSend={handleMessageSend}
                      onMessageClose={handleMessageClose}
                    />
                  </Route>
                </Switch>
              </Col>
            </Row>
          </Col>
        </Container>

        <SettingsModal
          visible={settingsModalVisible}
          onSettingsModalClose={handleSettingsModalClose}
        ></SettingsModal>
      </BrowserRouter>
    </SettingsProviderWrapper>
  );
};
