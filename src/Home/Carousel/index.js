import React from 'react';
import mobile1 from '../../assets/mobile/1.jpg';
import mobile2 from '../../assets/mobile/2.jpg';
import mobile3 from '../../assets/mobile/3.jpg';
import desktop1 from '../../assets/desktop/1.png'
import desktop2 from '../../assets/desktop/2.png'
import desktop3 from '../../assets/desktop/3.png'
import { Container, Carousel } from 'react-bootstrap';
import { useMediaQuery } from 'react-responsive'

const ImageSlider = () => {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-device-width: 992px)'
    })
    // const isMobileOrTablet = useMediaQuery({
    //     query: '(max-device-width: 990px)'
    // })
    return (
        <Container>
            <Carousel className="slider" controls={false}>
                <Carousel.Item>
                    <img
                        className="d-block w-100 slideImage"
                        src={isDesktopOrLaptop ? desktop1 : mobile1}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 slideImage"
                        src={isDesktopOrLaptop ? desktop2 : mobile2}
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 slideImage"
                        src={isDesktopOrLaptop ? desktop3 : mobile3}
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </Container>
    );
};

export default ImageSlider;