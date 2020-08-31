import React, { useState } from 'react';


type Props = {
    initValue?: boolean,
};

function DivBlock({initValue = true}: Props){   
    const [isShow, setShow] = useState(initValue);
    const [Count, setCount] = useState(10);
    return (
<>
<button onClick = {()=> {setShow(!isShow); setCount(Count+1)}}>Show/hide</button>
<div>count:{Count}</div>
{isShow && <div>Блок с данными</div>}
</>
    );
}
export {DivBlock};

