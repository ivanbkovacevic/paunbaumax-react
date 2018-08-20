import React, { Component } from 'react';
import {  Row, Col } from 'react-bootstrap';
import KontaktForm from './KontaktForm';

class Kontakt extends Component {

    state= {
        fields:{}
    };

    handleSub=(fields)=>{
     this.setState({fields});
    }

    render() {
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
                        <a href="mailto:salonkeramike@panbaumax.rs">salonkeramike@panbaumax.rs</a>
                       </div>
                        
                        <div className="map-container-inform--telefon">
                            <svg className="icon-phone">
                                    <use xlinkHref="sprite.svg#icon-phone"></use>
                            </svg>
                                <a href="tel:+381646441078">064 644 10 78</a><br></br>
                                <a href="tel:+38113 403 638"> 013 403 638</a>
                        </div>
                        
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
                       <KontaktForm handleSub={fields=>this.handleSub(fields)} />
                       <p>{JSON.stringify(this.state.fields,null,2)}</p>
                    </Col>
                    <Col lg={3}></Col>
                </Row>
            </div>

        </div>

    );
}
};

export default Kontakt;