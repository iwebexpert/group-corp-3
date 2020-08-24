import React from 'react';
import classNames from 'classnames';
import {Item, ItemWithId} from '../types/types';

export const Message: React.FC<Item> = ({message, author}) => {
    const classesItem = classNames('list-group-item', {
        'list-group-item-light': author === 'Bot'
    });
    return (<li className={classesItem}>
        Автор: {author} <br/>
        Сообщение: {message} <br/>
    </li>);
}
