import './Layout.scss'

import React from 'react';
import { Container } from 'react-bootstrap';
import classnames from 'classnames'
import { ThemeContext } from '../../Theme';

type Props = {
    header: JSX.Element;
    body: JSX.Element;
    footer: JSX.Element;
}

export const Layout = (props: Props) => {
    return <ThemeContext.Consumer children={ (ctx) => {
        const className = classnames(['layout-container', 'theme-' + ctx.theme])    
        return (
            <div className={className}>
                {props.header}
                <Container fluid="md" className="layout-body mt-3 mb-2">
                    {props.body}
                </Container>
                {props.footer}
            </div>
        );
    }}/>;
}