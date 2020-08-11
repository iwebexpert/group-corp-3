import React from 'react';
//import './App.css';

import { Message } from './components/Message';
import { Messages } from './components/Messages';
import { Button } from './components/Button';
import { Button2 } from './components/Button2';
import { DivBlock } from './components/DivBlock';
import { MessagesList } from './components/MessagesList';

//Вариант 1
const element1 = React.createElement('h1', {className: 'test'}, 'Hello!');

//Вариант 2
const element2 = (<h1 className="test2">Test!</h1>);

const items = ['Message 1', 'Test 1', 'React!'];
 
function App() {
  return (
    <>
      {element1}
      {element2}
      <Message text="Text1" />
      <Message text="Text1" author="Dev" />
      <hr/>
      <Messages items={items} />
      <hr/>
      <Button text="Основная кнопка" callback={()=>{console.log('Click!')}} />
      <hr/>
      <Button2 callback={()=>{console.log('Click!')}}><b>Новая кнопка!</b></Button2>
      <hr/>
      <DivBlock />
      <hr/>
      <MessagesList />
    </>

      
  );

  /* <Fragment>
    </Fragment> */
}

export default App;
