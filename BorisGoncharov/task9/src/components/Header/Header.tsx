import React, { FC } from 'react';
import { Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { BsGear } from 'react-icons/bs';
import classNames from 'classnames';
import './Header.scss';

export type HeaderProps = {
  settingsLoading: boolean;
  onSettingsButtonClick: () => void;
};

export const Header: FC<HeaderProps> = ({
  settingsLoading,
  onSettingsButtonClick,
}) => {
  const { t } = useTranslation();

  const iconClasses = classNames('header__settings-icon', {
    rotate: settingsLoading,
  });

  const settingsButtonClickHandler = () => {
    if (!settingsLoading) {
      onSettingsButtonClick();
    }
  };

  return (
    <Row className="bg-dark px-5 py-3 m-0 justify-content-between">
      <h5 className="text-white m-0">{t('CHAT')} v0.0.9</h5>
      <BsGear className={iconClasses} onClick={settingsButtonClickHandler} />
    </Row>
  );
};
