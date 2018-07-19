import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';

class Slider extends Component {
    render() {
        return (
            <div>
                <Carousel>
                    <Carousel.Item>
                        <img width={900} height={500} alt="900x500" src="../../../assets/img/slavina.jpg" />
                        <Carousel.Caption>
                        <h3>Slavina 1</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width={900} height={500} alt="900x500" src="../../../assets/img/slavina2.jpg" />
                        <Carousel.Caption>
                        <h3>Slavina 2</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width={900} height={500} alt="900x500" src="../../../assets/img/slavina3.jpg" />
                        <Carousel.Caption>
                        <h3>Slavina 3</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        );
    }
}

export default Slider;