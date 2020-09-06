import './Header.scss'
import React, { useContext, useState } from 'react'
import { Navbar, Form, FormControl } from 'react-bootstrap';
import { LangPicker } from '../../Langs';
import { ThemeContext, Themes } from '../../Theme';
import { AuthContext } from '../../Auth';


export const Header = () => {
    const cssImage = {'backgroundImage': `url('./logo.svg')`} as React.CSSProperties;

    const authContext = useContext(AuthContext);
    const [userName, _setUserName] = useState(authContext.user.name);
    const setUserName = (name:string) => {
        authContext.user.name = name;
        _setUserName(name);
    }

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
                <Form>
                    <Form.Group>
                        <FormControl as="select" value={ctx.theme} onChange={e => ctx.change(e.target.value as Themes)} >
                            <option value={Themes.light}> Светлая </option>
                            <option value={Themes.dark}> Тёмная </option>
                        </FormControl>
                    </Form.Group>
                    <Form.Group>
                        <FormControl value={authContext.user.name} onChange={ e => setUserName(e.target.value)}/>
                    </Form.Group>
                </Form>
            } />
        </Navbar> 
)}