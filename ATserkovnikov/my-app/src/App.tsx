import React from 'react';
//import {MessagesBlock} from "./Components/MessagesBlock";
import {TasksBlock} from "./Components/TasksBlock";

const element = (<h1 className="test1">Hello!</h1>);
//const items: string[] = [];
//const addValue: string = "Нормально";

export const ConfigContext = React.createContext<ConfigApp>({lang: 'en'});
export const ConfigContextProvider = ConfigContext.Provider;
export const ConfigContextConsumer = ConfigContext.Consumer;

function App() {
    return (
    <>
      {element}
      <hr/>
      {/*<MessagesBlock items={items} addValue={addValue}/>*/}
      <TasksBlock/>
    </>
  );
}

export default App;
