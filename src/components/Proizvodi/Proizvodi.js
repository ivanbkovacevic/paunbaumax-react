import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

class Proizvodi extends Component {
    render() {
        return (
          <section className="proizvodi">
          <div className="proizvodi-header">
          </div>
               
            <Row >
              <Col md={4}>
               <div className="proizvodi__container__filter">
                 filter
               </div>
              </Col>   
              <Col md={8}>
              <div className="proizvodi__container__proizvodi">
                proizvodi
               </div>
               </Col>     
            </Row>
          </section>
        );
    }
}

export default Proizvodi;