import React, { FC } from 'react';
import { Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import './Header.scss';

export type HeaderProps = {
  onSettingsButtonClick: () => void;
};

export const Header: FC<HeaderProps> = ({ onSettingsButtonClick }) => {
  const { t } = useTranslation();

  return (
    <Row className="bg-dark px-5 py-3 m-0 justify-content-between">
      <h5 className="text-white m-0">{t('CHAT')} v0.0.8</h5>

      <svg
        width="1.25em"
        height="1.25em"
        viewBox="0 0 16 16"
        className="settings-icon bi bi-sliders"
        fill="white"
        xmlns="http://www.w3.org/2000/svg"
        onClick={onSettingsButtonClick}
      >
        <path
          fillRule="evenodd"
          d="M14 3.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0zM11.5 5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM7 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0zM4.5 10a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm9.5 3.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0zM11.5 15a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"
        />
        <path
          fillRule="evenodd"
          d="M9.5 4H0V3h9.5v1zM16 4h-2.5V3H16v1zM9.5 14H0v-1h9.5v1zm6.5 0h-2.5v-1H16v1zM6.5 9H16V8H6.5v1zM0 9h2.5V8H0v1z"
        />
      </svg>
    </Row>
  );
};
