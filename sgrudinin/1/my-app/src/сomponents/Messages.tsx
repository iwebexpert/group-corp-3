import React,{ReactElement} from 'react';
import {Message} from './Message';

type Props = {
    items: string[],
};

function Messages({items}: Props): ReactElement{
    //return items.map((item,index) =><Message text = {item} key = {index}></Message>);
    const messages = items.map((item,index) =><Message text = {item} key = {index}></Message>);
    return (<>{messages}</>)
}

export {Messages};

