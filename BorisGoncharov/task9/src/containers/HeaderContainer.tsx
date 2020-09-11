import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Header } from '../components/Header';
import { AppState } from '../state/store';
import { settingsModalOpen } from '../state/actions';

export const HeaderContainer: FC<{}> = () => {
  const dispatch = useDispatch();

  const handleSettingsButtonClick = () => {
    dispatch(settingsModalOpen());
  };

  const settingsLoading = useSelector(
    (state: AppState) => state.settings.loading
  );

  return (
    <Header
      settingsLoading={settingsLoading}
      onSettingsButtonClick={handleSettingsButtonClick}
    />
  );
};
