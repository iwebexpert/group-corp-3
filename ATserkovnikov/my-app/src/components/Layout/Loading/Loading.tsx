import React from "react";
import './Loading.scss'
import {Spinner} from "react-bootstrap";

type LoadingProps = {
    loading: boolean;
}
export const Loading: React.FC<LoadingProps> = ({loading}) => {
    const overlay = loading ? <>
        <div className="loading">
            <div className="loading-wheel">
                <Spinner animation="border" variant="success" />
            </div>
        </div>
    </> : null;

    return (overlay);
};
