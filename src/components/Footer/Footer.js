import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import logo from './logo-gradjevina-whiteF.png';

class Footer extends Component {
  render() {
    return (
      <div>
       
        <Row className="footer">
          <Col lg={3}>
            <img src={logo} alt={"logo"} />
          </Col>
          <Col lg={2}>
            <p>POCETNA</p>
            <p>O NAMA</p>
            <p>PROIZVODI</p>
            <p>REFERENCE</p>
            <p>KONTAKT</p>
          </Col>
          <Col className="satnica" lg={2}>
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

          </Col>
        </Row>
      </div>
    );
  }
}

export default Footer;