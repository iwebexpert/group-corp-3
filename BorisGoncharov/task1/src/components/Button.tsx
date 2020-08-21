import React, { MouseEventHandler } from 'react';

type Props = {
  text: string;
  clickCallback: MouseEventHandler;
};

export default function Button({ text, clickCallback }: Props) {
  return <button onClick={clickCallback}>{text}</button>;
}
