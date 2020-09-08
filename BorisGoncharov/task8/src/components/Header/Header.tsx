import React, { FC } from 'react';
import { Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { BsGear } from 'react-icons/bs';
import './Header.scss';

export type HeaderProps = {
  onSettingsButtonClick: () => void;
};

export const Header: FC<HeaderProps> = ({ onSettingsButtonClick }) => {
  const { t } = useTranslation();

  return (
    <Row className="bg-dark px-5 py-3 m-0 justify-content-between">
      <h5 className="text-white m-0">{t('CHAT')} v0.0.8</h5>
      <BsGear className="settings-icon" onClick={onSettingsButtonClick} />
    </Row>
  );
};
