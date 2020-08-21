import React from 'react';
import './App.css';
import TodoList from './components/TodoList';
import Form from './components/Form';

export default class App extends React.Component<{}, AppState> {
  constructor(props: {}) {
    super(props);
    this.state = { items: [] };
  }

  protected closeItem = (id: string) => {
    // It is recommended to fetch state inside setState
    // Because state updates can be async
    this.setState((state) => {
      const newItems = state.items.filter((item) => item.id !== id);
      return { items: newItems };
    });
  };

  protected toggleItem = (id: string) => {
    this.setState((state) => {
      const newItems = state.items.map((item) => {
        // Because state is readonly
        const newItem = { ...item };
        if (newItem.id === id) {
          newItem.checked = !newItem.checked;
        }
        return newItem;
      });
      return { items: newItems };
    });
  };

  protected createItem = (text: string) => {
    this.setState((state) => {
      const newItem = {
        id: Date.now().toString(),
        text,
        checked: false,
        closeItem: this.closeItem,
        toggleItem: this.toggleItem,
      };
      const newItems = [...state.items, newItem];
      return { items: newItems };
    });
  };

  protected resetItems = () => {
    this.setState({ items: [] });
  };

  public render() {
    return (
      <>
        <TodoList items={this.state.items} />
        <hr />
        <Form createItem={this.createItem} resetItems={this.resetItems} />
      </>
    );
  }
}
