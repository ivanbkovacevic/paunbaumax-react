import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';

class Slider extends Component {
    render() {
        return (
            <div>
                <Carousel>
                    <Carousel.Item>
                        <img  alt="900x500" src="../../../assets/img/slide-room.jpg" />
                      
                    </Carousel.Item>
                    <Carousel.Item>
                        <img  alt="900x500"  src="../../../assets/img/slider-room1.jpg" />
                       
                    </Carousel.Item>
                  
                </Carousel>
            </div>
        );
    }
}

export default Slider;