import './Header.scss'
import React from 'react'
import { Navbar } from 'react-bootstrap';
import { LangPicker } from '../../Langs';


export const Header = () => {
    const cssImage = {'backgroundImage': `url('./logo.svg')`} as React.CSSProperties;


    return (
        <Navbar bg={"light"} sticky={"top"}>
            <Navbar.Brand >
                <div className="page-header-logo">
                    <div className="page-header-logo-img" style={cssImage}> </div>
                    <div className="page-header-logo-text"> Answering machine </div>
                </div>
            </Navbar.Brand>
            <LangPicker />
        </Navbar> 
)}