import React, { FC } from 'react';
import './Header.scss';

export type HeaderProps = {
  title: string;
};

export const Header: FC<HeaderProps> = ({ title }) => {
  return (
    <div className="bg-dark px-5 py-3">
      <h5 className="text-white m-0">{title}</h5>
    </div>
  );
};
