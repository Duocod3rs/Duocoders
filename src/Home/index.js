import React from 'react';
import { Navbar, Col, Nav, Button, Container, Carousel, Form } from 'react-bootstrap'
import { AiOutlineSearch } from 'react-icons/ai'
import './Home.scss'
import 'bootstrap/dist/css/bootstrap.css'
import Cartoons from './Cartoons';

const Home = () => {
    const nextIcon = <span aria-hidden="true" className="carousel-control-next-icon" />
    return (
        <div className="Home">
            <Navbar collapseOnSelect className="navbar" expand="lg">
                <Navbar.Brand href="#home" className="brand">
                    <span className="title">DUOCODERS</span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" style={{ background: '#fff' }} />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Col xl={{ span: '2', offset: '10' }} lg={{ span: '2', offset: '10' }}>
                        <Nav className="me-auto">
                            <Button style={{ background: '#1F88CE', color: '#fff', borderRadius: '25px', fontWeight: 'bold' }}>SIGN&nbsp;IN / REGISTER</Button>
                        </Nav>
                    </Col>
                </Navbar.Collapse>
            </Navbar>
            <Container>
                <Carousel nextIcon={nextIcon}>
                    <Carousel.Item>
                        <img
                            height="360"
                            className="d-block w-100"
                            src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22350%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20350%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_17a55416126%20text%20%7B%20fill%3A%23ffffff%3Bfont-weight%3Anormal%3Bfont-family%3Avar(--bs-font-sans-serif)%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_17a55416126%22%3E%3Crect%20width%3D%22800%22%20height%3D%22350%22%20fill%3D%22%23282c34%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22251.9765625%22%20y%3D%22221.365625%22%3ESecond%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            height="360"
                            className="d-block w-100"
                            src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22350%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20350%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_17a55416126%20text%20%7B%20fill%3A%23ffffff%3Bfont-weight%3Anormal%3Bfont-family%3Avar(--bs-font-sans-serif)%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_17a55416126%22%3E%3Crect%20width%3D%22800%22%20height%3D%22350%22%20fill%3D%22%23282c34%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22251.9765625%22%20y%3D%22221.365625%22%3ESecond%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
                            alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            height="360"
                            className="d-block w-100"
                            src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22350%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20350%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_17a55416126%20text%20%7B%20fill%3A%23ffffff%3Bfont-weight%3Anormal%3Bfont-family%3Avar(--bs-font-sans-serif)%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_17a55416126%22%3E%3Crect%20width%3D%22800%22%20height%3D%22350%22%20fill%3D%22%23282c34%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22251.9765625%22%20y%3D%22221.365625%22%3ESecond%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
                            alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </Container>
            {/* End of header section */}
            <Container className="content">
                <div className="row" style={{ justifyContent: 'center', color: '#fff' }}></div>
                <h2>Latest Releases</h2>
                <Cartoons />
            </Container>
        </div>
    );
};

export default Home;