import React from 'react';
import { usePalette } from 'react-palette'
import { Card, Col, Button } from 'react-bootstrap'
import { IoAddOutline } from 'react-icons/io5'
import view from '../../assets/view.svg'
import './Cartoons.scss'

const CartoonCard = (props) => {
    // eslint-disable-next-line
    const {data, loading, error} = usePalette(props.image)
    return (
        <Col style={{ marginTop: '30px' }} xs={12} sm={12} md={6} lg={6} xl={6}>
            <Card className="CartoonCard" style={{boxShadow:`4px 8px ${data.vibrant}`, border:`2px solid ${data.vibrant}`}}>
                <Card.Img alt="cover" variant="Top" style={{ borderTopLeftRadius: '20px', borderTopRightRadius: '20px', width: '100%', height: '250px' }} src={props.image} />
                <Card.Body>
                    <h3>{props.title}</h3>
                    <p style={{ fontSize: '14px' }}>{props.description}</p>
                    <div className="actions">
                        <Button variant="outline-light"><IoAddOutline style={{ fontSize: "25px" }} />&nbsp;WATCHLIST</Button>
                        <Button variant="outline-light"><img src={view} alt="view" />&nbsp;WATCH NOW</Button>
                    </div>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default CartoonCard;