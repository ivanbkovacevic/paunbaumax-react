import React, { Component } from 'react';
import { Row, Col} from 'react-bootstrap';
import logo from './logo-gradjevina-white.png';
import namestaj1 from './namestaj1.jpg';
import namestaj2 from './namestaj2.png';
import namestaj3 from './namestaj3.png';
import namestaj4 from './namestaj4.png';
import namestaj5 from './namestaj5.png';
import namestaj6 from './namestaj6.png';
import namestaj7 from './namestaj7.png';

class Onama extends Component {

    state = {
        klasa:''
    }

    HoverHandler=()=>{
        this.setState({klasa:'borred'});
    }

    HoverOf=()=>{
        this.setState({klasa:''});
    }

    render(){
        return (
            <div className="onama">
              <div className="header">
                 <h3>O nama</h3>
                 <div className="linija"></div>
                  <p>Pan Bau Max Keramika je deo firme Pan Bau Max doo od 2016. godine sa sedištem u Pančevu. 
                      Pošto je Pan Bau Max gradjevinsko preduzeće, logičan sled okolnosti je da se širi u pravcu
                       prvobitne delatnosti, pa se donosi odluka da se otvori salon keramike i sanitarne opreme
                        i time zaokruži jedan deo gradnje.</p>
                    <p>Iako mlad ogranak firme, Pan Bau Max Keramika ima kadar sa višegodišnjim iskustvom u oblasti
                         keramike i sanitarne opreme. Sa stalnim praćenjem trendova i inovacija u pomenutoj oblasti i 
                         saradnji sa kolegama iz ogranka izgradnje daje dobru kombijaciju što tržištu donosi svežinu 
                         u vidu ponude i usluge.</p>
                    <p>Posetite nas sajt:</p>
                    <img src={logo} alt={"logo firme"}/>
              </div>
              <section container className="ikonice" onMouseEnter={this.HoverHandler} onMouseLeave={this.HoverOf}>
                <Row>
                    <Col lg={4} className="ik1">
                    <i class="far fa-lightbulb fa-10x"></i>
                       <h3>Idejna resenja</h3>
                       <p>Ukoliko ste neodlučni, mi ćemo Vam ponuditi idejno rešenje Vašeg prostora.</p>
                    </Col> 
                    <Col lg={4} className="ik2">
                    <i class="fas fa-award fa-10x"></i>
                       <h3>Zadovoljnstvo i kvalitet</h3>
                       <p>Vaše zadovoljstvo nam je podsticaj za dalji rad, pa nastojimo da bude na visokom nivou.</p>
                    </Col> 
                    <Col lg={4} className="ik3">
                    <i class="fas fa-truck fa-8x"></i>
                       <h3>Prevoz robe</h3>
                       <p>Besplatno prevozimo robu do Vaše adrese.</p>
                    </Col> 
                </Row>
               </section>
              
               <section className="galerija">
                 <img  className={this.state.klasa}  src={namestaj1} alt={"galerija1"} />
                 <img src={namestaj2} alt={"galerija2"} />
                
                 <img src={namestaj4} alt={"galerija4"} />
                 <img src={namestaj5} alt={"galerija5"} />
                 <img src={namestaj6} className="revealOnScroll" alt={"galerija6"} />
                 <img className="gal7" src={namestaj7} alt={"galerija7"} />
               </section>     
            </div>
        );
   
    }
}

export default Onama;