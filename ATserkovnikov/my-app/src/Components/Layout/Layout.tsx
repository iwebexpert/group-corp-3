import React from 'react';
import {Header} from '../Header';
import {Content} from '../Content';
import {Footer} from '../Footer';

import './Layout.scss'

export const Layout: React.FC = () => {
    return (
            <div>
                <Header/>
                <Content/>
                <Footer/>
            </div>
    );
};
