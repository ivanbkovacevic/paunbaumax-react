import React, { Component } from 'react';
import Slider from '../Slider/Slider';
import OpisProizvoda from '../OpisProizvoda/OpisProizvoda';

class Home extends Component {
    render() {
        return (
            <div>
                <Slider />
                <OpisProizvoda />
             
                <section className="home-category-links">
                    <div container-fluid>
                        <img width={900} height={500} src="../../../assets/img/namestaj1.jpg" alt="namestaj" />
                    </div>
                    <div>
                        a b c
                </div>
                </section>
                <section className="home-hot-spots">
                    HOT SPOTS
                </section>
                <section className="home-about-us">
                    ABOUT US
                </section>
            </div>
        );
    }
}

export default Home;