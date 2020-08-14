import React from 'react';

export default class Form extends React.Component<FormProps> {
  private inputRef = React.createRef<HTMLInputElement>();

  protected submitHandler = () => {
    if (this.inputRef.current) {
      if (this.inputRef.current.value) {
        this.props.createItem(this.inputRef.current.value);
      }

      this.inputRef.current.value = '';
    }
  };

  protected resetHandler = () => {
    if (this.inputRef.current) {
      this.props.resetItems();
      this.inputRef.current.value = '';
    }
  };

  render() {
    return (
      <>
        <div>Input some text</div>
        <input
          ref={this.inputRef}
          type="text"
          onChange={() => this.setState(this.props)} // Need to refresh component to disable/enable button
        />
        <button
          onClick={this.submitHandler}
          disabled={!this.inputRef.current?.value}
        >
          Submit
        </button>
        <button onClick={this.resetHandler}>Reset</button>
      </>
    );
  }
}
