import React, { Component } from 'react';
import { TodoItem } from './TodoItem';

class TodoList extends Component<TodoListProps, {}> {
  public render() {
    const { items, onCompleteToggle, onDelete } = this.props;

    return (
      <ul className="list-group border list-group-flush">
        {(!items || !items.length) && <span className="text-center text-muted my-3">Нет задач</span>}
        {items.map((item: Task, index: number) => {
          return (
            <TodoItem
              key={item.id + index}
              item={item}
              onDelete={onDelete}
              onCompleteToggle={onCompleteToggle}
            />
          );
        })}
      </ul>
    );
  }
}

export { TodoList };