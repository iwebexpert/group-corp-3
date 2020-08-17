import React, { useState } from 'react';
import { TodoItemEntity } from './entities';

let id: number = 0;

type ItemInputProps = {
    addItem: (item: TodoItemEntity) => void;
}

export const ItemInput = ({addItem}: ItemInputProps) => {
    const [state, setState] = useState<string>('');

    const changeInputState = (event: React.ChangeEvent<HTMLInputElement>) => {
        setState(event.target.value)
    }

    const sendInputState = () => {
        addItem({name: state, id: id++});
        setState('');
    }

    return (
        <div>
            <form onSubmit={(e) => {e.preventDefault()}}>
                <input value={state} onChange={changeInputState}/> <button type='submit' onClick={sendInputState}>Add</button>
            </form>
        </div>
    )
}