import React from 'react'
import { Carousel } from 'react-bootstrap'
import carouselimage1 from '../Data/images/carousel1.jpeg'
import carouselimage2 from '../Data/images/carousel2.jpeg'
import carouselimage3 from '../Data/images/carousel3.jpeg'



const ImageCarousel = () => {

    return (
        <div>
            <Carousel fade>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={carouselimage1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        {/* <h3>Bags</h3> */}

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={carouselimage2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        {/* <h3>Bags</h3> */}

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={carouselimage3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        {/* <h3>Bags</h3> */}

                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default ImageCarousel
