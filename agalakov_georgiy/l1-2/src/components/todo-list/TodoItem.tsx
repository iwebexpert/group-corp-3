import React from 'react';
import { TodoItemEntity } from './entities';

import './TodoList.css';

type TodoItemProps = {
    item: TodoItemEntity;
    removeItem: (id: number) => void;
}

export const TodoItem = ({item, removeItem}: TodoItemProps) => {
    return (
        <div className="todo-item">
            <h4>{item.name}</h4> <button className="delete-button" onClick={() => removeItem(item.id)}> X </button>
        </div>
    )
}