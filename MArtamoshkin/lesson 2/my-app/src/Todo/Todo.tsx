import React, { Component } from 'react';
import { TodoList } from './TodoList';
import { TodoCreate } from './TodoCreate';
import { taskStub } from '../taskStub';

class Todo extends Component<{}, TodoState> {
  public state: TodoState = {
    items: [...taskStub],
    showCompletedList: false
  };

  protected onSubmitHandler = (val: string): void => {
    const newItem: Task = {
      id: Date.now(),
      title: val,
      done: false
    };

    const updatedItems = [...this.state.items, newItem];

    this.setState({
      items: updatedItems,
    });
  };

  protected onCompleteHandler = (id: number): void => {
    const changedItems = this.state.items
      .map((item: Task) => {
        if (item.id === id) {
          return {
            ...item,
            done: !item.done
          }
        }

        return item;
      })
      .sort((a: Task, b: Task) => Number(a.done) - Number(b.done));

    this.setState((state: TodoState) => ({
      ...state,
      items: [...changedItems]
    }));


  };

  protected onDeleteHandler(id: number): void {
    this.setState((state: TodoState) => ({ ...state, items: state.items.filter((item: Task) => item.id !== id) }));
  }

  protected onToggleCompletedListHandler(): void {
    this.setState((state: TodoState) => ({ ...state, showCompletedList: !state.showCompletedList }));
  }

  public render() {
    const { items, showCompletedList } = this.state;

    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-4">
            <h3 className="text-center mb-4">ToDo List</h3>
            <TodoList
              onDelete={this.onDeleteHandler.bind(this)}
              items={items.filter((item: Task) => !item.done)}
              onCompleteToggle={this.onCompleteHandler}
            />
            <div className="col text-right my-2">
              <button type='button' className="btn btn-link pull-right text-muted"
                onClick={this.onToggleCompletedListHandler.bind(this)}>{showCompletedList ? 'Скрыть' : 'Показать'} выполненные задачи</button>
            </div>
            {showCompletedList && <TodoList
              onDelete={this.onDeleteHandler.bind(this)}
              items={items.filter((item: Task) => item.done)}
              onCompleteToggle={this.onCompleteHandler}
            />}
            <TodoCreate onSubmit={this.onSubmitHandler} />
          </div>
        </div>
      </div>
    );
  }
}

export { Todo };