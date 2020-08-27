import React from 'react';

import { TodoItem } from './todoItem';


export class Todos extends React.Component<MessagesListProps> {

  
  static defaultProps: MessagesListProps = {
    items: [],
  }

    public render() {
      const { items } = this.props;

      const messages = items.map((item, index) => <TodoItem text={ item } key={ index }/>)

      return (
           <>
           {messages}
           </> 
      );
    }
  }

