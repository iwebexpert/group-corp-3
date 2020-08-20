import './App.css';
import React from 'react';
import { ToDoList } from './ToDoList/ToDoList';

import { library as fontawesomeLibrary } from '@fortawesome/fontawesome-svg-core'
import * as Icons from '@fortawesome/free-solid-svg-icons'
import { LangPicker, createLangContextValue, LangContext, ILangContextMod } from './Langs';

const iconList = Object
  .keys(Icons)
  .filter(key => key !== "fas" && key !== "prefix")
  .map(icon => (Icons as any)[icon])

fontawesomeLibrary.add(iconList as any)



class App extends React.Component {
  constructor(props: any, context?: any) {
    super(props, context);
    this.langContextValue = createLangContextValue(this);
  }
  private readonly langContextValue: ILangContextMod;
  public render() {
    return (
      <LangContext.Provider value={this.langContextValue}>
        <div style={{ float: 'right' }}>
          <LangPicker />
        </div>
        <ToDoList />
      </LangContext.Provider>
    );
  }
}

export default App;
