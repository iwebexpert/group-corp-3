import React, { FC, useRef, useState } from 'react';
import './Layout.scss';
import { Header } from '../Header';
import { ChatList, Chat } from '../ChatList';
import { Messenger } from '../Messenger';
import { SettingsContext } from '../../context/Settings';
import { Col, Container, Row } from 'react-bootstrap';
import { Message } from '../Message';
import { generate } from 'shortid';
import { Settings, SettingsModal } from '../SettingsModal';

export const Layout: FC<{}> = () => {
  const [chats, setChats] = useState<Chat[]>([
    { title: 'Chat 1', id: generate(), messages: [] },
    { title: 'Chat 2', id: generate(), messages: [] },
    { title: 'Chat 3', id: generate(), messages: [] },
    { title: 'Chat 4', id: generate(), messages: [] },
  ]);
  const [activeChat, setActiveChat] = useState<Chat>(chats[0]);
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const [settingsModalVisible, setSettingsModalVisible] = useState<boolean>(
    false
  );

  const context = useRef({
    author: 'Boris',
    theme: 'Light',
    language: 'Ru',
  });

  const handleChatSelect = (chat: Chat) => () => {
    setActiveChat(chat);
    setIsTyping(false);
  };

  const handleIsTypingChange = (isTyping: boolean): void => {
    setIsTyping(isTyping);
  };

  const handleMessagesChange = (messages: Message[]): void => {
    setChats(
      chats.map((chat) => {
        if (chat.id === activeChat.id) {
          chat.messages = messages;
        }
        return chat;
      })
    );
    handleChatSelect(activeChat);
  };

  const handleSettingsButtonClick = (): void => {
    setSettingsModalVisible(true);
  };

  const handleSettingsModalClose = (): void => {
    setSettingsModalVisible(false);
  };

  const handleSettingsModalSubmit = (settings: Settings): void => {
    context.current = { ...settings };
  };

  return (
    <SettingsContext.Provider value={{ ...context?.current }}>
      <Container>
        <Col className="p-0 shadow-lg">
          <Header
            title="Chat v.0.0.6"
            onSettingsButtonClick={handleSettingsButtonClick}
          />

          <Row noGutters>
            <Col md="3" className="bg-secondary">
              <ChatList
                chats={chats}
                onChatSelect={handleChatSelect}
                activeChatId={activeChat.id}
              />
            </Col>

            <Col md="9">
              <Messenger
                messages={activeChat.messages}
                isTyping={isTyping}
                onMessagesChange={handleMessagesChange}
                onIsTypingChange={handleIsTypingChange}
              />
            </Col>
          </Row>
        </Col>
      </Container>

      <SettingsModal
        visible={settingsModalVisible}
        onSettingsModalClose={handleSettingsModalClose}
        onSettingsModalSubmit={handleSettingsModalSubmit}
      ></SettingsModal>
    </SettingsContext.Provider>
  );
};
