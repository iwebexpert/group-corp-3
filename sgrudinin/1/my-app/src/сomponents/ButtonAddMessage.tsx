import React,{ useState } from 'react';


function ButtonAddMessage(){
    const [messages, setMessages] = useState<string[]>([]);
return (<><button onClick ={()=> setMessages(messages.concat("нормально"))} >Добавить сообщение</button>
<div>{messages.map((x,index)=><div key={index}>{x}<br/></div>)}</div></>);
}


export {ButtonAddMessage};
