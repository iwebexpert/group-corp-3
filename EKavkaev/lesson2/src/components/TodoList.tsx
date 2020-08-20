import React from 'react';
import TodoElement from './TodoElement';
import { List, Paper, Divider } from '@material-ui/core';

export default class TodoList extends React.Component<TodoListProps> {

    public render(){
        const {checkItem, removeItem, items} = this.props
        const result = items.sort((a,b) => a.id - b.id ).map(i => 
            (<><TodoElement checkItem={checkItem} removeItem={removeItem} item={i} key={i.id}/><Divider light/></>)
        );
        
        return (
            <List>
                {result}
            </List>
        );
    }
}