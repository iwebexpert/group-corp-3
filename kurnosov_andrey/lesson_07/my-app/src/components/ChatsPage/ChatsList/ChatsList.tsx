import './ChatsList.scss'

import React from 'react'
import classnames from 'classnames'
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

type ChatsListProps = {
    selectedId?: string
    onSelect?: (el: {id: number; name: string}) => void
    list: {id: number; name: string}[]
}

export const ChatsList = (props: ChatsListProps) => {
        
    
    const list = props.list.map( (el, i) => {
        const className = classnames(
            { 'border-top' : i !== 0}
        )
        return (
            <Nav.Item className={className}
                key={el.id}
                onClick={ () => props.onSelect && props.onSelect(el) }
            >
                <Nav.Link 
                    as={Link} 
                    to={'/chats/'+el.id} 
                    active={el.id.toString() === props.selectedId}
                >
                    {el.name}
                </Nav.Link>
            </Nav.Item>
        ) 
    });
    return <Nav className="flex-column" variant="pills">
        {list}
    </Nav>
}