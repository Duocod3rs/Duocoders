import React from 'react';
import { Col, Button, Container, Form } from 'react-bootstrap'
import { AiOutlineSearch, AiOutlineMail } from 'react-icons/ai'
import { FaInstagram } from 'react-icons/fa'
import Cartoons from './Cartoons';
import ImageSlider from './Carousel';
import Navbar from './Navbar';
import './Home.scss'
import 'bootstrap/dist/css/bootstrap.css'

const Home = (props) => {
    return (
        <div className="Home">
            <Navbar user={props.user} />
            <ImageSlider />
            <div className="socialDiv">
                <FaInstagram className="socialIcon" />
                <AiOutlineMail className="socialIcon" />
            </div>
            <Container className="content">
                <center><span id="blink">
                   <br/> No ads <br/>enjoy free streaming.
                </span></center>
                <div className="row search-div">
                    <Form.Group as={Col} xs={10} lg={6} className="search">
                        <Form.Control type="text" className="searchInput" placeholder="Search Cartoons" />
                        <Button className="searchBtn"><AiOutlineSearch style={{ fontSize: '20px', fontWeight: 'bold' }} /></Button>
                    </Form.Group>
                </div>
                <h2>Latest Releases</h2>
                <Cartoons />
            </Container>
            <div style={{ color: '#fff', textAlign: 'center', marginTop: '30px', marginBottom: '10px' }}>
                <h6 style={{ color: '#fff', fontFamily: 'Montserrat', fontWeight: '600' }}>
                    &copy;{new Date(Date.now()).getFullYear()} DEVELOPED BY DUOCODERS
                </h6>
            </div>
        </div>
    );
};

export default Home;