import React from 'react';
import { Carousel } from 'react-bootstrap';



const Slider = (props) => {
    const { heroSection } = props
    return <>
        <Carousel>
            {
                heroSection && heroSection.map((page) => {
                    const { title, imageUrl } = page
                    // console.log(page)
                    return (
                        <Carousel.Item >
                            <img
                                className="d-block w-100"
                                src={imageUrl}
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <h3>{title}</h3>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    )
                }
                )

            }
        </Carousel>
    </>
}

{/* <Carousel>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={imageUrl}
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <h3>Third slide label</h3>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel> */}




export default Slider;
