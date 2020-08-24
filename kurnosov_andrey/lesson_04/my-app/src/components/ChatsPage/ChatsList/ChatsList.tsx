import './ChatsList.scss'

import React from 'react'
import classnames from 'classnames'

type ChatsListProps = {
    selectedId?: string
    onSelect?: (el: {id: string; name: string}) => void
    list: {id: string; name: string}[]
}

export const ChatsList = (props: ChatsListProps) => {
        

    const list = props.list.map( el => {
        const classNames = classnames(
            'chats-list-item',
            {'active': el.id === props.selectedId}
        )

        return (
            <li className={classNames} 
                key={el.id}
                onClick={ () => props.onSelect && props.onSelect(el) }
            >
                {el.name}
            </li>
        ) 
    });

    return <ul className="chats-list">
        {list}
    </ul>
}