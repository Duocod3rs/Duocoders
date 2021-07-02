import React from 'react';
import { withRouter } from 'react-router-dom'
import { signInWithGoogle, signOut } from '../../firebase/firebase-utils'
import { Navbar, Nav, Col, Button, NavDropdown } from 'react-bootstrap'
import { MdPlaylistAddCheck } from 'react-icons/md'
import { CgMenuRound } from 'react-icons/cg'

const navbar = (props) => {
    return (
        <Navbar collapseOnSelect className="navbar" expand="lg">
            <div className="brand">
                <span className="title">DUOCODERS</span>
            </div>
            <Navbar.Toggle aria-controls="responsive-navbar-nav"><CgMenuRound style={{ fontSize: '40px', color: '#fff' }} /></Navbar.Toggle>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Col xl={{ span: '6', offset: props.user ? '8' : '10' }} lg={{ span: '6', offset: '7' }} className="navItems">
                    {props.user ?
                        <Nav.Link onClick={() => props.history.push('/Watch-list')} style={{ color: '#fff', marginLeft: '-10px', fontFamily: 'Poppins', }}>
                            <div style={{ display: 'flex' }}><MdPlaylistAddCheck style={{ fontSize: '20px' }} />&nbsp;WATCHLIST</div></Nav.Link>
                        : null}
                    {props.user ?
                        <div style={{ display: 'flex' }}>
                            <img src={props.user.photoURL} alt="user" style={{ height: '40px', borderRadius: '40px', marginRight: '-8px', marginLeft: '15px' }} />
                            <NavDropdown style={{ textTransform: 'uppercase', fontFamily: 'Poppins', fontWeight: 'bold' }} title={props.user.displayName} id="nav-dropdown">
                                <NavDropdown.Item onClick={signOut}>LOGOUT</NavDropdown.Item>
                            </NavDropdown>
                        </div>
                        : <Button onClick={signInWithGoogle} style={{ background: '#1F88CE', color: '#fff', borderRadius: '25px', fontWeight: 'bold' }}>SIGN&nbsp;IN / REGISTER</Button>}
                </Col>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default withRouter(navbar);