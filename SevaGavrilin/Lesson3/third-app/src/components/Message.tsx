import React, { Fragment } from 'react';


function Message( {author, text}: MessageProps){
    return(<>
        <hr/>
        Author {author}
        <br/>
        Text: {text} 
    </>);
}

export { Message };