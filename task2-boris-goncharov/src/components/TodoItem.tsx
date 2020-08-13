import React from 'react';

export default class TodoItem extends React.Component<TodoItemProps> {
  render() {
    return (
      <>
        <input
          type="checkbox"
          checked={this.props.checked}
          onChange={() => this.props.toggleItem(this.props.id)}
        />
        <span>{this.props.text}</span>
        <button onClick={() => this.props.closeItem(this.props.id)}>x</button>
      </>
    );
  }
}
