import './Layout.scss'

import React from 'react';


type Props = {
    header: JSX.Element;
    body: JSX.Element;
    footer: JSX.Element;
}

export const Layout = (props: Props) => {
    return (
        <div className="layout-container">
            <div className="layout-header">
                {props.header}
            </div>
            <div className="layout-body">
                {props.body}
            </div>
            <div className="layout-footer">
                {props.footer}
            </div>
        </div>
    );
}