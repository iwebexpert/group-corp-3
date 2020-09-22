import React, { FC } from 'react';
import { connect } from 'react-redux';
import { Header } from '../components/Header';
import { AppState } from '../state/store';
import { SettingsActions, settingsModalOpen } from '../state/actions';
import { Dispatch } from 'redux';

type StateProps = {
  settingsLoading: boolean;
};

type DispatchProps = {
  onSettingsButtonClick: () => void;
};

type Props = StateProps & DispatchProps;

export const HeaderContainer: FC<Props> = ({
  settingsLoading,
  onSettingsButtonClick,
}) => {
  return (
    <Header
      settingsLoading={settingsLoading}
      onSettingsButtonClick={onSettingsButtonClick}
    />
  );
};

const mapStateToProps = (state: AppState): StateProps => {
  return {
    settingsLoading: state.settings.loading,
  };
};

const mapDispathToProps = (
  dispatch: Dispatch<SettingsActions>
): DispatchProps => {
  return {
    onSettingsButtonClick: () => dispatch(settingsModalOpen()),
  };
};

export default connect(mapStateToProps, mapDispathToProps)(HeaderContainer);
