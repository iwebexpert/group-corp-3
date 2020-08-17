import React, { Component } from 'react';

class TodoItem extends Component<TodoItemProps, {}> {
  public render() {
    const { item, onCompleteToggle, onDelete } = this.props;

    return (
      <li className="list-group-item d-flex justify-content-stretched">
        <div className="checkbox  mx-2">
          <label className="mb-0" style={{ fontSize: '1em' }}>
            <input type="checkbox" name={`todo-item-${item.id}`} checked={item.done} onChange={() => onCompleteToggle(item.id)}/>
            <span className="cr"><i className="cr-icon fa fa-check"></i></span>
          </label>
        </div>
        {item.done ? <del className="text-muted w-100">{item.title}</del> : <span className="w-100">{item.title}</span>}
        <span className="mx-2 btn p-0" onClick={() => onDelete(item.id)}>
          <i className="far fa-trash-alt" />
        </span>
      </li>
    );
  }
}

export { TodoItem };