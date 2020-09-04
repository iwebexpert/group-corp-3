import React, { FC, useContext, useState } from 'react';
import './Chat.scss';
import { Header } from '../Header';
import { Col, Container, Row } from 'react-bootstrap';
import { SettingsModal } from '../SettingsModal';
import { Redirect, Route, Switch } from 'react-router-dom';
import { SettingsContext } from '../../contexts/SettingsContext';
import classNames from 'classnames';
import { MessengerContainer } from '../../containers/MessagerContainer';
import { ChatListContainer } from '../../containers/ChatListContainer';

export const Chat: FC<{}> = () => {
  const [settingsModalVisible, setSettingsModalVisible] = useState<boolean>(
    false
  );
  const { theme } = useContext(SettingsContext);

  const chatListClasses = classNames({
    'bg-secondary': theme === 'Light',
    'bg-dark': theme === 'Dark',
  });

  const handleSettingsButtonClick = (): void => {
    setSettingsModalVisible(true);
  };

  const handleSettingsModalClose = (): void => {
    setSettingsModalVisible(false);
  };

  return (
    <>
      <Container>
        <Col className="p-0 shadow-lg">
          <Header onSettingsButtonClick={handleSettingsButtonClick} />

          <Switch>
            <Route path={`/:chatId`} exact>
              <Row noGutters>
                <Col md="3" className={chatListClasses}>
                  <ChatListContainer />
                </Col>

                <Col md="9">
                  <MessengerContainer />
                </Col>
              </Row>
            </Route>
            <Route path="">
              <Redirect to={`/${0}`}></Redirect>
            </Route>
          </Switch>
        </Col>
      </Container>

      <SettingsModal
        visible={settingsModalVisible}
        onSettingsModalClose={handleSettingsModalClose}
      ></SettingsModal>
    </>
  );
};
