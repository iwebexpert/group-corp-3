import './Header.scss'
import React from 'react'
import { Navbar } from 'react-bootstrap';
import { SettingsButton } from '../Settings';
import { Link } from 'react-router-dom';


export const Header = () => {
    const cssImage = {'backgroundImage': `url('/logo.svg')`} as React.CSSProperties;

    return (
        <Navbar bg={"light"} sticky={"top"}>
            <Navbar.Brand className="mr-auto">
                <Link to="/">
                    <div className="page-header-logo">
                        <div className="page-header-logo-img" style={cssImage}> </div>
                        <div className="page-header-logo-text"> Answering machine </div>
                    </div>
                </Link>
            </Navbar.Brand>
            <div className="float-right">
                <SettingsButton/>
            </div>
        </Navbar> 
)}