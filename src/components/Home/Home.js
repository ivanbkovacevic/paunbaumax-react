import React, { Component } from 'react';
import { Grid, Row, Col, Button } from 'react-bootstrap';
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
                   <img src="../../assets/img/panbaumax_home_v1.jpg" alt="hot spot" className="hot-spot-image"/>
                </section>
                <Grid >
                <Row className="row-onama">
                    <Col sm={6} >
                      <h1> O nama</h1>
                      <p>Pan Bau Max Keramika je deo firme Pan Bau Max doo od 2016. godine sa sedištem u Pančevu. Pošto je Pan Bau Max gradjevinsko preduzeće, logičan sled okolnosti je da se širi u pravcu prvobitne delatnosti, 
                      pa se donosi odluka da se otvori salon keramike i time zaokruži jedan deo gradnje.</p>
                      <Button className="button-detaljnije">DETALJNIJE</Button>
                    </Col>
                    <Col sm={6}>
                      <h1> O nama</h1>
                    </Col>
                </Row>
            </Grid>
                </div>
        );
    }
}

export default Home;