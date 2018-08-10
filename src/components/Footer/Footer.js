import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import logo from './logo-gradjevina-whiteF.png';

class Footer extends Component {
  render() {
    return (
      <div className="footer__row">
        <Row >
          <Col lg={2}>
            <div className="footer__col">
              <img src={logo} alt={"logo"} />
            </div>

          </Col>
          <Col lg={2}>
            <div className="footer__col--links">
              <p>POCETNA</p>
              <p>O NAMA</p>
              <p>PROIZVODI</p>
              <p>REFERENCE</p>
              <p>KONTAKT</p>
            </div>

          </Col>
          <Col lg={2}>
            <div className="footer__col--satnica">
              Radno vreme:
                Ponedeljak - Petak
                08h - 20h
                Subota
                08h - 15h
            </div>
          </Col>
          <Col lg={3}>
            <div className="footer__col--adresa">
              Pan Bau Max Keramika
              ul. Lava Tolstoja 60
              26000 Pančevo
              +381 13 403 638
              salonkeramike@panbaumax.rs
          </div>

          </Col>
          <Col lg={3}>
            <div className="footer__col--social">  
           
                        <svg className="footer__col--social--icon-facebook">
                                  <use xlinkHref="sprite.svg#icon-facebook2"></use>
                        </svg>
                     
              <svg className="footer__col--social--icon-instagram">
                                  <use xlinkHref="sprite.svg#icon-instagram"></use>
                        </svg>
            </div>

          </Col>
        </Row>

      </div>
    );
  }
}

export default Footer;