import React, { useState } from 'react';

type Props = {
    initValue?: boolean,
};

function DivBlock({ initValue = true }: Props){

    const [isShow, setShow] = useState(initValue);
    const [count, setCount] = useState(10);

    return (
        <>
            <div>Количество кликов {count}</div>
            <button onClick={() => {setShow(!isShow); setCount(count + 1)}}>Show/hide</button>
            {isShow && <div>Блок с данными. Все работает!</div>}
        </>
    );
}

export { DivBlock }