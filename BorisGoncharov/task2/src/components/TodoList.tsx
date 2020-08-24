import React from 'react';
import TodoItem from './TodoItem';

export default class TodoList extends React.Component<TodoListProps> {
  render() {
    return (
      <>
        {this.props.items.map((item: TodoItemProps) => {
          return (
            <div key={item.id}>
              <TodoItem
                text={item.text}
                checked={item.checked}
                id={item.id}
                closeItem={item.closeItem}
                toggleItem={item.toggleItem}
              />
            </div>
          );
        })}
      </>
    );
  }
}
