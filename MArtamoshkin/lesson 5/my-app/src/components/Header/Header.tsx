import React from "react";
import './Header.scss';
import { Badge } from 'react-bootstrap';

const Header = () => {
    return <div className="panel-heading">
        <h2 className="panel-title pb-3">
            bot <Badge
                className="badge-chat">chat</Badge>
        </h2>
    </div>;
}

export { Header };
