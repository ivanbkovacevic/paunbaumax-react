import React, { Component } from 'react';
import { Carousel} from 'react-bootstrap';

class Brand_slider extends Component {

    state={
        indicators:false,
        controls:false,
        interval:1000
    }

    render() {
        return (
            <div>
            <Carousel interval={this.state.interval} indicators={this.state.indicators} controls={this.state.controls}>
                <Carousel.Item >
        
                    <img  alt="900x500" src="../../../assets/img/img_brand_slider/fondavelle.png" />
                </Carousel.Item>
                <Carousel.Item>
                <img  alt="900x500" src="../../../assets/img/img_brand_slider/idea_ceramica_home.png" />                  
                </Carousel.Item>
                <Carousel.Item>
                <img  alt="900x500" src="../../../assets/img/img_brand_slider/novabell.png" />                  
                </Carousel.Item>
                <Carousel.Item>
                <img  alt="900x500" src="../../../assets/img/img_brand_slider/sidel-1.png" />                  
                </Carousel.Item>
                <Carousel.Item>
                <img  alt="900x500" src="../../../assets/img/img_brand_slider/supergras_home.png" />                  
                </Carousel.Item>
            </Carousel>
        </div>
        );
    }
}

export default Brand_slider;
