import React, { FC } from 'react';
import './Chat.scss';
import { Col, Container, Row, Spinner } from 'react-bootstrap';
import { Redirect, Route, Switch } from 'react-router-dom';
import classNames from 'classnames';
import { MessengerContainer } from '../../containers/MessagerContainer';
import { ChatListContainer } from '../../containers/ChatListContainer';
import { SettingsModalContainer } from '../../containers/SettingsModalContainer';
import { HeaderContainer } from '../../containers/HeaderContainer';

export type ChatProps = {
  chatsLoading: boolean;
  messagesLoading: boolean;
  theme: Theme;
};

export const Chat: FC<ChatProps> = ({
  chatsLoading,
  messagesLoading,
  theme,
}) => {
  const chatListClasses = classNames({
    'bg-secondary': theme === 'light',
    'bg-dark': theme === 'dark',
  });

  return (
    <>
      <Container>
        <Col className="p-0 shadow-lg">
          <HeaderContainer />

          <Switch>
            <Route path={`/:chatId`} exact>
              <Row noGutters>
                <Col md="3" className={chatListClasses}>
                  {chatsLoading ? (
                    <Spinner animation="border" variant="secondary" />
                  ) : (
                    <ChatListContainer />
                  )}
                </Col>

                <Col md="9">
                  {messagesLoading ? (
                    <Spinner animation="border" variant="secondary" />
                  ) : (
                    <MessengerContainer />
                  )}
                </Col>
              </Row>
            </Route>
            <Route path="">
              <Redirect to={`/${0}`}></Redirect>
            </Route>
          </Switch>
        </Col>
      </Container>

      <SettingsModalContainer />
    </>
  );
};
