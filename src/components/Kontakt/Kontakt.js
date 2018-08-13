import React from 'react';
import { Grid, Row, Col, Button } from 'react-bootstrap';

const Kontakt = (props) => {
    return (
        <div>
            <div className="kontakt-container">
                KONTAKT
                <div className="map-container">
               
                    <div className="map-container-inform">
                         
                        <div className="map-container-inform--email">
                        <svg className="icon-mail">
                                  <use xlinkHref="sprite.svg#icon-mail"></use>
                        </svg>
                        salonkeramike@panbaumax.rs</div>
                        
                        <div className="map-container-inform--telefon">
                        <svg className="icon-phone">
                                  <use xlinkHref="sprite.svg#icon-phone"></use>
                        </svg>
                        064 644 10 78  013 403 638</div>
                        
                        <div className="map-container-inform--adress">
                        <svg className="icon-home">
                                  <use xlinkHref="sprite.svg#icon-home"></use>
                        </svg>
                        Lava Tolstoja 60  26000 Pancevo</div>
                    </div>
                </div>
            </div>

            <div className="info__container__main">
                <Row>
                    <Col lg={3}></Col>
                    <Col lg={6}>
                        <div className="info__container__heading">
                            <h2 className="info__container__heading--naslov"> Kontaktirajte nas</h2>

                            <div className="linijaKontakt"></div>
                        </div>


                        <form className="info__container__form">
                            <input type="text" className="info__container__form--name" placeholder="Ime" />
                            <input type="email" className="info__container__form--email" placeholder="Email" />
                            <textarea rows="20" cols="50" className="info__container__form--poruka">Poruka</textarea>
                            <Button className="button-detaljnije">POSALJI</Button>
                        </form>
                    </Col>
                    <Col lg={3}></Col>
                </Row>
            </div>

        </div>

    );
};

export default Kontakt;