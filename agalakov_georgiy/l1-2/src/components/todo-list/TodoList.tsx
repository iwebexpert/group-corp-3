import React, { useState } from 'react';
import { ItemInput } from './ItemInput';
import { TodoItem } from './TodoItem';
import { TodoItemEntity } from './entities';

import './TodoList.css';

export const TodoList = () => {
    const [items, setItems] = useState<TodoItemEntity[]>([])

    const addItem = (item: TodoItemEntity) => {
        setItems([...items, item]);
    }

    const removeItem = (id: number) => {
        setItems(items.filter(it => it.id !== id));
    }

    return (
        <div className="main">
            <div className="custom-row">
                {items.map(it => <TodoItem item={it} key={it.id} removeItem={removeItem}/>)}
            </div>

            <ItemInput addItem={addItem} />
        </div>
    )
}