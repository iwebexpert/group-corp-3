import React from 'react';
import { Console } from 'console';



class TodoItem extends React.Component<MessageProps, MessageState> {

  public state: MessageState = {
    isDone: false,
  };

  protected handleChangeDone = () => {
    this.setState({isDone: !this.state.isDone})
  }

    public render() {
      return (
          <>
           <input type="checkbox" onChange={()=>{
                this.handleChangeDone();
              }}/>
           
           <div>
             Text: {this.props.text} | {this.state.isDone ? 'Готово!' : ' - '}
           </div>
          </>
      );
    }
  }

  export { TodoItem };