import React, { Component } from 'react';
import { Grid, Row, Col, Button } from 'react-bootstrap';
import Slider from '../Slider/Slider';
import Onama from './home-about-us.png';
import Marker from './hot-spot.png';
import Hotspot from './hotspot-1.png';
import './Home.css';




class Home extends Component {

    state = {
        moveClass1: 'home-hot-spots__product1',
        moveClass2: 'home-hot-spots__product2',
        moveClass3: 'home-hot-spots__product3'
    }

    HandleEnter1 = (a) => {
        this.setState({ moveClass1: 'home-hot-spots__product'+a+' move' })
    }

    HandleEnter2 = (a) => {
       this.setState({ moveClass2: 'home-hot-spots__product'+a+' move' })
   }

   HandleEnter3 = (a) => {
   this.setState({ moveClass3: 'home-hot-spots__product'+a+' move' })
}

    HandleLeave1 = (b) => {
        this.setState({  moveClass1: 'home-hot-spots__product'+b+' remove'})
    }

    HandleLeave2 = (b) => {
        this.setState({  moveClass2: 'home-hot-spots__product'+b+' remove'})
    }

    HandleLeave3 = (b) => {
        this.setState({  moveClass3: 'home-hot-spots__product'+b+' remove'})
    }

    render() {
        return (
            <div>
                <Slider />

                <Grid>
                    <Row>
                        <Col>
                            <div className="home-categories-mainheading">
                                <h2 className="probna">Proizvodi</h2>
                                <div className="home-categories-heading--linija linija"></div>
                                <p className="paragraf-opisproizvoda">Iako mlad ogranak firme, Pan Bau Max Keramika ima kadar sa višegodišnjim iskustvom u oblasti keramike
                                    i sanitarne opreme. Sa stalnim praćenjem trendova i inovacija u pomenutoj oblasti i saradnji sa kolegama
                                    ogranka izgradnje daje dobru kombijaciju što tržištu donosi svežinu u vidu ponude i usluge.
                            </p>
                            </div>

                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className="home-categories-plocice">
                                <div className="home-categories__linkbox">
                                    <h1 className="home-categories-plocice--heading">Plocice</h1>
                                    <ul className="home-categories__linkbox--listL">
                                        <li><a href="#">Podne</a></li>
                                        <li><a href="#">Beton</a></li>
                                        <li><a href="#">Drvo</a></li>
                                        <li><a href="#">Kamen</a></li>
                                        <li><a href="#">Mermer</a></li>
                                        <li><a href="#">Mozaik</a></li>
                                    </ul>
                                    <ul className="home-categories__linkbox--listR">
                                        <li><a href="#">Zidne</a></li>
                                        <li><a href="#">Mat</a></li>
                                        <li><a href="#">Sjaj</a></li>
                                        <li><a href="#">Dekor</a></li>
                                        <li><a href="#">Mozaik</a></li>
                                    </ul>

                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={4}>
                            <div className="home-categories--sanitarija">
                                <div className="home-categories__linkbox">
                                    <h1 className="home-categories--sanitarija--heading">Sanitarija</h1>
                                    <ul className="home-categories__linkbox--sanitarijaList">
                                        <li><a href="#">Lavaboi</a></li>
                                        <li><a href="#">Wc solje</a></li>
                                        <li><a href="#">Kade</a></li>
                                        <li><a href="#">Tus kabine</a></li>
                                        <li><a href="#">Kupatilski namestaj i ogledala</a></li>

                                    </ul>
                                </div>
                            </div>

                        </Col>
                        <Col lg={4}>
                            <div className="home-categories--slavine">
                                <div className="home-categories__linkbox">
                                    <h1 className="home-categories--slavine--slavine__heading">Slavine</h1>
                                </div>
                            </div>

                        </Col>
                        <Col lg={4}>
                            <div className="home-categories--ostalo">
                                <div className="home-categories__linkbox">
                                    <h1 className="home-categories--ostalo--heading">Ostalo</h1>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Grid>

                <section className="home-hot-spots">
                    <img src="../../assets/img/panbaumax_home_v1.jpg" alt="hot spot" className="home-hot-spots__image" />
                    
                    <div onMouseEnter={(e)=>this.HandleEnter1('1')}
                        onMouseLeave={(e)=>this.HandleLeave1('1')}
                         className="home-hot-spots__box1" >
                        <img className="home-hot-spots__marker1" src={Marker} alt={'hot-spot-1'} />
                    </div>

                    <img
                        className={this.state.moveClass1} src={Hotspot} alt={'hot-spot-11'} />


                    <div onMouseEnter={(e)=>this.HandleEnter2('2')}
                        onMouseLeave={(e)=>this.HandleLeave2('2')}
                        className="home-hot-spots__box2">
                        <img className="home-hot-spots__marker2" src={Marker} alt={'hot-spot-2'} />
                    </div>

                    <img
                        className={this.state.moveClass2} src={Hotspot} alt={'hot-spot-22'} />

                   <div onMouseEnter={(e)=>this.HandleEnter3('3')}
                        onMouseLeave={(e)=>this.HandleLeave3('3')}
                        className="home-hot-spots__box3">
                        <img className="home-hot-spots__marker3" src={Marker} alt={'hot-spot-3'} />
                    </div>

                    <img
                        className={this.state.moveClass3} src={Hotspot} alt={'hot-spot-33'} />

                </section>

                <Grid >
                    <Row className="row-onama">
                        <Col sm={6} >
                            <h1> O nama</h1>
                            <p>Pan Bau Max Keramika je deo firme Pan Bau Max doo od 2016. godine sa sedištem u Pančevu. Pošto je Pan Bau Max gradjevinsko preduzeće, logičan sled okolnosti je da se širi u pravcu prvobitne delatnosti,
                      pa se donosi odluka da se otvori salon keramike i time zaokruži jedan deo gradnje.</p>
                            <Button className="button-detaljnije">DETALJNIJE</Button>
                        </Col>
                        <Col sm={6}>
                            <div>
                                <img src={Onama} alt={'onama'} />
                            </div>
                        </Col>
                    </Row>
                </Grid>
                <div className="brand__slider">
                    gr
                     </div>
            </div>
        );
    }
}

export default Home;