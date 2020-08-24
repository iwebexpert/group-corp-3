import React from 'react';
import MessageModel from '../models/Message';
import Message from './Message';

type Props = {
  items: MessageModel[];
};

export default function Messages({ items }: Props) {
  // Прочитал, что не рекомендуется использовать индекс массива
  // Рекомендуют привязыватсья к индексу внутри объекта
  const messages = items.map((item) => (
    <Message message={item} key={item.id} />
  ));
  return <>{messages}</>;
}
