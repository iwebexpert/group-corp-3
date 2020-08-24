import React, { useState } from 'react';


function ChatListComponent(){

    return (
    <>
    <ul className="list-group">
    {' '.repeat(12).split('').map((x, idx)=> <li className="list-group-item" key={idx}>Some chat {idx}</li>)}
    </ul>
    </>
    );
};
export { ChatListComponent };