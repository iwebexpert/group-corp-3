import React, {useState} from 'react';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
import ModalApp from '../components/UI/Modal/Modal';
import {SettingForm} from '../SettingForm/SettingForm';
import './header.scss';

export const Header: React.FC<{}> = ({}) => {
    const [isShowModal, setShow] = useState(false);

    const showModal = () => {
        setShow(true);
    };

    const closeModal = () => {
        setShow(false);
    };

    return (
        <div className={'header'}>
            <Navbar bg='light' expand='lg'>
                <Navbar.Brand href='#home'>
                    <img height={"75px"} src={require('../../assets/img/angular-card.png')}/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-nav' />
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav className='mr-auto'>
                        <Nav.Link href='#home'>Home</Nav.Link>
                        <Nav.Link href='#link'>Link</Nav.Link>
                        <NavDropdown title='Dropdown' id='basic-nav-dropdown'>
                            <NavDropdown.Item href='#action/3.1'>Action</NavDropdown.Item>
                            <NavDropdown.Item href='#action/3.2'>Another action</NavDropdown.Item>
                            <NavDropdown.Item href='#action/3.3'>Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href='#action/3.4'>Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Navbar.Text>
                        <a onClick={showModal} href='#setting'><i className='fas fa-cogs' style={{fontSize: '22px'}}></i></a>
                        <ModalApp show={isShowModal} title={'Настройки приложения'} isFooter={false} onCloseModal={closeModal}>
                            <SettingForm onCloseModal={closeModal}></SettingForm>
                        </ModalApp>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Navbar>
        </div>

    )
}
