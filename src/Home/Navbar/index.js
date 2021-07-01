import React from 'react';
import { Navbar, Nav, Col, Button } from 'react-bootstrap'
import { CgMenuRound } from 'react-icons/cg'

const navbar = () => {
    return (
        <Navbar collapseOnSelect className="navbar" expand="lg">
            <div className="brand">
                <span className="title">DUOCODERS</span>
            </div>
            <Navbar.Toggle aria-controls="responsive-navbar-nav"><CgMenuRound style={{ fontSize: '40px', color: '#fff' }} /></Navbar.Toggle>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Col xl={{ span: '2', offset: '10' }} lg={{ span: '2', offset: '10' }}>
                    <Nav className="me-auto">
                        <Button style={{ background: '#1F88CE', color: '#fff', borderRadius: '25px', fontWeight: 'bold' }}>SIGN&nbsp;IN / REGISTER</Button>
                    </Nav>
                </Col>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default navbar;