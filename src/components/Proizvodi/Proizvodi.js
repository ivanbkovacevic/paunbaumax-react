import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

class Proizvodi extends Component {
    render() {
        return (
            <Grid >
            <Row>
              <Col>
               <img width={900} height={500} src="../../../assets/img/namestaj1.jpg" alt="namestaj"/>
              </Col>
            </Row>
    
            <Row >
              <Col md={4}  >
               a
              </Col>   
              <Col md={4}  >
               b
               </Col> 
               <Col md={4}  >
               c
               </Col>    
            </Row>
          </Grid>
        );
    }
}

export default Proizvodi;