import './Header.scss'
import React, { useContext, useState } from 'react'
import { Navbar, Form, FormControl } from 'react-bootstrap';
import { SettingsButton } from '../Settings';


export const Header = () => {
    const cssImage = {'backgroundImage': `url('./logo.svg')`} as React.CSSProperties;

    return (
        <Navbar bg={"light"} sticky={"top"}>
            <Navbar.Brand className="mr-auto">
                <div className="page-header-logo">
                    <div className="page-header-logo-img" style={cssImage}> </div>
                    <div className="page-header-logo-text"> Answering machine </div>
                </div>
            </Navbar.Brand>
            <div className="float-right">
                <SettingsButton/>
            </div>
        </Navbar> 
)}