import React from 'react';
import {MessagesBlock} from "./Components/MessagesBlock";

const element = (<h1 className="test1">Hello!</h1>);

export const ConfigContext = React.createContext<ConfigApp>({lang: 'en'});
export const ConfigContextProvider = ConfigContext.Provider;
export const ConfigContextConsumer = ConfigContext.Consumer;

function App() {
    return (
    <>
      {element}
      <hr/>
      <MessagesBlock messages={[]} authors={[]}/>
      {/*<TasksBlock/>*/}
    </>
  );
}

export default App;
