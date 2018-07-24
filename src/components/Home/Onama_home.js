import React, { Component } from 'react';
import { Grid, Row, Col, Button } from 'react-bootstrap';

class Onama_home extends Component {
    render() {
        return (
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
        );
    }
}

export default Onama_home;