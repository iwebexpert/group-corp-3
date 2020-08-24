import React from "react";
import './Header.scss';

const Header = () => {
    return <div className="panel-heading">
        <h2 className="panel-title pb-3">
            bot <span
                className="badge badge-chat">chat</span>
        </h2>
    </div>;
}

export { Header };
