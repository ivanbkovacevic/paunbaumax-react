import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

class Footer extends Component {
    render() {
        return (
              <div>
                <div className="line">linija</div>
                <Row className="footer-row">
                <Col lg={3}>
                 a
                </Col>
                <Col lg={2}>
                 <p>POCETNA</p>
                 <p>O NAMA</p>
                 <p>PROIZVODI</p>
                 <p>REFERENCE</p>
                 <p>KONTAKT</p>
                </Col>
                <Col lg={2}>
                Radno vreme:
                Ponedeljak - Petak
                08h - 20h
                Subota
                08h - 15h
              </Col>
              <Col lg={2}>
              Pan Bau Max Keramika
                ul. Lava Tolstoja 60
                26000 Pančevo
                +381 13 403 638
                salonkeramike@panbaumax.rs
              </Col>
              <Col lg={3}>
                 e
              </Col>
                </Row>
                </div>
        );
    }
}

export default Footer;