import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { Header } from '../components/Header';
import { settingsModalOpen } from '../state/settings/settingsActions';

export const HeaderContainer: FC<{}> = () => {
  const dispatch = useDispatch();

  const handleSettingsButtonClick = () => {
    dispatch(settingsModalOpen());
  };

  return <Header onSettingsButtonClick={handleSettingsButtonClick} />;
};
