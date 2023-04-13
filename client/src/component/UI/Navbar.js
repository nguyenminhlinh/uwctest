import React, { useState } from "react";
import Button from 'react-bootstrap/Button'
import Offcanvas from 'react-bootstrap/Offcanvas'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Dropdown from 'react-bootstrap/Dropdown';

import {User} from '../modules/utils/user';
// import { Link } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faTruckFast,
} from '@fortawesome/free-solid-svg-icons';
import './style/Navbar.css';
// import { FiSend } from "react-icons/fi";

export default function NavbarComponent() {
    const [show, setShow] = useState(false);
    const Logout = () => {
        localStorage.removeItem("USER_LOGIN");
    }
    const Login = () => {
        let token = localStorage.getItem('USER_LOGIN');
        if(!token)
            return (<Button className="login__btn" href="/Login">Đăng nhập</Button>)
        return (
            <Dropdown>
                <img
                    alt='avt'
                    src={User.avt}
                    className='avt-img'
                    onClick={() => {
                        setShow(!show);
                    }}
                />
                <Dropdown.Menu show = {show} align="end">
                    <Dropdown.Item href="/Info">Thông tin cá nhân</Dropdown.Item>
                    <Dropdown.Divider/>
                    <Dropdown.Item onClick={Logout} href="/">Đăng xuất</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        )
    }

    return (
        <Navbar collapseOnSelect expand="xl" bg="light" variant="light" sticky='top' key='sm'>
            <Container className='nv-container'>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Brand href="/">
                    <div className='logo'>
                        <FontAwesomeIcon icon={faTruckFast} className='logo-icon'></FontAwesomeIcon>
                        URBAN WASTE <br /> COLLECTION <br /> AID - UWC 2.0
                    </div>
                </Navbar.Brand>
                <Navbar.Offcanvas
                    id={`offcanvasNavbar-expand-xl`}
                    aria-labelledby={`offcanvasNavbarLabel-expand-xl`}
                    placement="start"
                >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id={`offcanvasNavbarLabel-expand-xl`}>
                            <div className='logo'>
                                <FontAwesomeIcon icon={faTruckFast} className='logo-icon'></FontAwesomeIcon>
                                URBAN WASTE <br /> COLLECTION <br /> AID - UWC 2.0
                            </div>
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="justify-content-end flex-grow-1 pe-3">
                            <Nav.Link href="/">Trang chủ</Nav.Link>
                            {/* <Nav.Link href="#action2">Về Chúng tôi</Nav.Link> */}
                            <Nav.Link href="/Dashboard">Dashboard</Nav.Link>
                            {/* <NavDropdown
                                title="Danh mục"
                                id={`offcanvasNavbarDropdown-expand-xl`}
                            >
                                <NavDropdown.Item href="#Food">Đồ ăn</NavDropdown.Item>
                                <NavDropdown.Item href="#Drink">
                                    Đồ uống
                                </NavDropdown.Item>
                            </NavDropdown> */}
                        </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
                <div className='btn-gr'>
                    {/* <Button variant="light" href="/chat" className="chat__btn"><FiSend/></Button> */}
                    {Login()}
                </div>
            </Container>
        </Navbar>
    );
}