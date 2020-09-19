import React from 'react'
import { Link } from 'react-router-dom'

export const AboutPage = () => {
    return <>
        <div>
            <a href="http://ru.knowledgr.com/01810511/%D0%93%D0%BE%D0%BB%D0%BB%D0%B8%D0%B2%D1%83%D0%B4%D1%81%D0%BA%D0%B8%D0%B9%D0%9F%D1%80%D0%B8%D0%BD%D1%86%D0%B8%D0%BF"> Голливудский принцип</a>
        </div>
        <div>
            <Link to="chats">Обратно к чатам</Link>
        </div>
    </>
}