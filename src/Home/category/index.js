import React from 'react';
import { Card, Col, Button } from 'react-bootstrap'
import { IoAddOutline } from 'react-icons/io5'
import cover from '../../assets/cover.jpg'
import view from '../../assets/view.svg'
import './category.scss'

const Category = () => {
    return (
        <div className="category">
            <h2>Latest releases</h2>
            <Col style={{ marginTop: '30px' }} sm={6}>
                <Card className="cartoonCard">
                    <Card.Img alt="cover" variant="Top" style={{ borderTopLeftRadius: '20px', borderTopRightRadius: '20px', width: '100%', height: '250px' }} src={cover} />
                    <Card.Body>
                        <h3>KICK BUTTOWSKI</h3>
                        <p style={{fontSize:'14px'}}>Clarence Buttowski, a young boy, aspires to become the world's greatest daredevil, as he gets help from Gunther, his loyal friend and partner-in-crime.</p>
                        <div style={{ float: 'right', marginTop: '10px', color: '#fff' }}>
                            <Button variant="outline-light actions"><IoAddOutline style={{ fontSize: "25px" }} />&nbsp;WATCHLIST</Button>
                            <Button variant="outline-light actions"><img src={view} alt="view" />&nbsp;WATCH NOW</Button>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Category;