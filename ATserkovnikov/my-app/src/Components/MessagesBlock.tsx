import React, {useState} from "react";
import {Messages} from "./Messages";
import {Button} from "./Button";

type Props = {
    items: string[]
    addValue?: string
}

function MessagesBlock({items, addValue="Нормально"}: Props) {
    const [item, setItems] = useState(items);

    return (<>
        <Button addItem={()=>{
            setItems(item.concat(addValue))
        }}><b>Нормально</b>
        </Button>
        <hr/>
        <Messages items={item}/>
        </>
        )
}

export {MessagesBlock}
