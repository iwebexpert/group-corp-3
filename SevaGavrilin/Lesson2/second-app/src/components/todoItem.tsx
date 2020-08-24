import React from 'react';



class TodoItem extends React.Component<MessageProps> {

  public state = {
    isDone: false,
  };

  protected handleChangeDone = () => {
    this.state.isDone = !this.state.isDone;
  }

    public render() {
      return (
          <>
           <input type="checkbox" onChange={()=>{
                this.handleChangeDone();
              }}/>
           
           <div>
             Text: {this.props.text}
           </div>
           <div>
             {this.state.isDone}
           </div>
          </>
      );
    }
  }

  export { TodoItem };