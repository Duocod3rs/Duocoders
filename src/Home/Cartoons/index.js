import React from 'react';
import { CartoonsData } from './CartoonsData';
import CartoonCard from './CartoonCard'
import './Cartoons.scss'

const Cartoons = () => {
    return (
        <div className="cartoons row">
            {CartoonsData.map(cartoon => <CartoonCard key={cartoon.title} title={cartoon.title} image={cartoon.image} description={cartoon.description} />)}
        </div>
    );
};

export default Cartoons;