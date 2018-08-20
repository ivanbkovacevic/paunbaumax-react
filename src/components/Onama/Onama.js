import React, { Component } from 'react';
import { Row, Col} from 'react-bootstrap';
import logo from './logo-gradjevina-white.png';
import namestaj1 from './namestaj1.jpg';
import namestaj2 from './namestaj2.png';
import namestaj5 from './namestaj5.png';
import namestaj6 from './namestaj6.png';
import namestaj7 from './namestaj7.png';
import namestaj8 from './namestaj8.png';
import sijalica from './about-us-widget-1-icon.png';
import sertifikat from './about-us-widget-2-icon.png';
import kamionce from './about-us-widget-3-icon.png';

class Onama extends Component {



    render(){
        return (
            <div className="onama">
              <section className="header">
                 <h3 className="header__naslov">O nama</h3>
                 <div className="linija"></div>
                  <p  className="header__paragraph">Pan Bau Max Keramika je deo firme Pan Bau Max doo od 2016. godine sa sedištem u Pančevu. 
                      Pošto je Pan Bau Max gradjevinsko preduzeće, logičan sled okolnosti je da se širi u pravcu
                       prvobitne delatnosti, pa se donosi odluka da se otvori salon keramike i sanitarne opreme
                        i time zaokruži jedan deo gradnje.</p>
                    <p className="header__paragraph">Iako mlad ogranak firme, Pan Bau Max Keramika ima kadar sa višegodišnjim iskustvom u oblasti
                         keramike i sanitarne opreme. Sa stalnim praćenjem trendova i inovacija u pomenutoj oblasti i 
                         saradnji sa kolegama iz ogranka izgradnje daje dobru kombijaciju što tržištu donosi svežinu 
                         u vidu ponude i usluge.</p>
                    <p>Posetite nas sajt:</p>
                    <img className="header__logo" src={logo} alt={"logo firme"}/>
              </section>

              <section container className="ikonice" >
                <Row>
                    <Col lg={4} >
                    <div className="ikonice__ikona">
                        <div className="ikonice__ikona--img">
                             <img  src={sijalica} alt={"sijalica"}/>
                        </div>
                            <div className="ikonice__ikona--description">
                                <h3 className="ikonice__ikona--description--header">Idejna resenja</h3>
                                <p className="ikonice__ikona--description--text">Ukoliko ste neodlučni, mi ćemo Vam ponuditi idejno rešenje Vašeg prostora.</p>
                            </div>
                      
                    </div>
                   
                    </Col> 
                    <Col lg={4} >
                    <div className="ikonice__ikona">
                        <div className="ikonice__ikona--img">
                             <img  src={sertifikat} alt={"sertifikat"}/>
                        </div>
                            <div className="ikonice__ikona--description">
                                <h3 className="ikonice__ikona--description--header">Idejna resenja</h3>
                                <p className="ikonice__ikona--description--text">Ukoliko ste neodlučni, mi ćemo Vam ponuditi idejno rešenje Vašeg prostora.</p>
                            </div>
                      
                    </div>
                    </Col> 
                    <Col lg={4} >
                    <div className="ikonice__ikona">
                        <div className="ikonice__ikona--img">
                             <img  src={kamionce} alt={"kamionce"}/>
                        </div>
                            <div className="ikonice__ikona--description">
                                <h3 className="ikonice__ikona--description--header">Idejna resenja</h3>
                                <p className="ikonice__ikona--description--text">Ukoliko ste neodlučni, mi ćemo Vam ponuditi idejno rešenje Vašeg prostora.</p>
                            </div>
                      
                    </div>
                    </Col> 
                </Row>
               </section>
              
               <section className="galerija">

               <Row>
                    <Col lg={3} md={4} sm={6}>
                       <div className="galerija__box">
                        <img className="galerija__box__img" src={namestaj2} alt={"galerija2"} />
                        </div>
                    </Col>

                   <Col lg={3} md={4} sm={6}>
                     <div className="galerija__box"> <img className="galerija__box__img" src={namestaj1} alt={"galerija1"} /></div>
                     <div className="galerija__box"> <img className="galerija__box__img" src={namestaj5} alt={"galerija2"} /></div>
                   </Col>
                  
                   <Col lg={3} md={4}>
                     <div className="galerija__box"> 
                       <img className="galerija__box__img" src={namestaj8} alt={"galerija8"} />
                     </div>
                   </Col>
                   <Col lg={3}>
                     <div className="galerija__box"> <img className="galerija__box__img" src={namestaj6} alt={"galerija6"} /></div>
                     <div className="galerija__box"> <img className="galerija__box__img" src={namestaj7} alt={"galerija7"} /></div>
                   </Col>
               </Row>
             
                
              
               </section>     
            </div>
        );
   
    }
}

export default Onama;