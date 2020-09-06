import './Header.scss'
import React from 'react'
import { Navbar, Form, FormControl } from 'react-bootstrap';
import { LangPicker } from '../../Langs';
import { ThemeContext, Themes } from '../../Theme';


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
            <ThemeContext.Consumer children={ (ctx) =>
                <FormControl as="select" value={ctx.theme} onChange={e => ctx.change(e.target.value as Themes)} >
                    <option value={Themes.light}> Светлая </option>
                    <option value={Themes.dark}> Тёмная </option>
                </FormControl>
            } />
        </Navbar> 
)}