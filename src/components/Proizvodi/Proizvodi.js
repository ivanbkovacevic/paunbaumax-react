import React, { Component } from 'react';
import { Grid, Row, Col, Checkbox, Button,FormGroup } from 'react-bootstrap';
import gal1 from './img-gallery/dark-1.jpg';
import gal2 from './img-gallery/darkPaint.jpg';

class Proizvodi extends Component {

  state = {
    plociceChecked: false,
    podneChecked: false,
    zidneChecked: false
  }

  handleChange = (event) => {
    console.log(event.target.checked);
    this.setState({ plociceChecked: !this.state.plociceChecked});
  }

  handleIsItCheckedZidneorPodne= () => {
    console.log(this.state.plociceChecked ? 'Yes' : 'No');
  }

  handleToggle = () => {
    this.state.plociceChecked = !this.state.plociceChecked;
    this.setState({ plociceChecked: this.state.plociceChecked });
  }

  render() {
    return (
      <section className="proizvodi">
        <div className="proizvodi-header">
        </div>
        <Row >
          <Col lg={3}>
            <div className="proizvodi__container__filter">
              <h2 className="h2--filter">Filteri</h2> <div className="proizvodi linija"></div>
              <div className="proizvodi__container__filter--1">
                <ul className="proizvodi__container__filter--1--ul"><span>Plocice</span><svg className="icon-strelica">
                  <use xlinkHref="sprite.svg#icon-chevron-thin-down"></use>
                </svg>
                  <form  >
                    <FormGroup bsSize="large">
                      <Checkbox
                        onChange={this.handleChange}
                        checked={this.state.plociceChecked}>Plocice</Checkbox>
                      {/* <Button type="button" onClick={this.handleToggle}>Toggle</Button>
            <Button type="button" onClick={this.handleIsItChecked}>Is it checked?</Button> */}
                      <Checkbox
                        onChange={this.handleChange}
                        checked={this.state.podneChecked}>Podne</Checkbox>
                      <Checkbox
                        onChange={this.handleChange}
                        checked={this.state.zidneChecked}>Zidne</Checkbox>
                    </FormGroup>
                  </form>

                  <ul className="proizvodi__container__filter--1--ul"><span>Podne</span>
                    <li>Beton</li>
                    <li>Drvo</li>
                    <li>Kamen</li>
                    <li>Mermer</li>
                    <li>Mozaik</li>
                  </ul>

                  <ul className="proizvodi__container__filter--1--ul"><span>Zidne</span>
                    <li>Dekor</li>
                    <li>Mat</li>
                    <li>Mozaik</li>
                    <li>Sjaj</li>
                  </ul>
                </ul>
              </div>

              <div className="proizvodi__container__filter--2">
                <ul className="proizvodi__container__filter--2--ul">
                  <li>adddddddddddddddddd</li>
                  <li>s</li>
                  <li>d</li>
                  <li>f</li>
                </ul>
              </div>

              <div className="proizvodi__container__filter--3">
                <ul className="proizvodi__container__filter--3--ul">
                  <li>adddddddddddddddddd</li>
                  <li>s</li>
                  <li>d</li>
                  <li>f</li>
                </ul>
              </div>

              <div className="proizvodi__container__filter--4">
                <ul className="proizvodi__container__filter--4--ul">
                  <li>adddddddddddddddddd</li>
                  <li>s</li>
                  <li>d</li>
                  <li>f</li>
                </ul>
              </div>
            </div>



          </Col>

          <Col lg={5}>
            <div className="proizvodi__container__proizvodi">
              <h2 className="h2">Proizvodi</h2> <div className="proizvodi linija"></div>
              <Row>

                <Col lg={4}>
                  <a href="#"><div className="proizvodi__box">
                    <img className="proizvodi__img" src={gal1} alt={"pera"} />
                  </div> <span className="proizvodi__title">ACTION dark 160x120</span> </a>
                </Col>

                <Col lg={4}>
                  <a href="#"><div className="proizvodi__box">
                    <img className="proizvodi__img" src={gal1} alt={"pera"} />
                  </div><span className="proizvodi__title">ACTION dark 160x120</span> </a>
                </Col>


                <Col lg={4}>
                  <a href="#"><div className="proizvodi__box">
                    <img className="proizvodi__img" src={gal2} alt={"pera"} />
                  </div> <span className="proizvodi__title">ACTION dark 160x120</span> </a>
                </Col>

                <Col lg={4}>
                  <a href="#"><div className="proizvodi__box">
                    <img className="proizvodi__img" src={gal1} alt={"pera"} />
                  </div> <span className="proizvodi__title">ACTION dark 160x120</span> </a>
                </Col>

                <Col lg={4}>
                  <a href="#"><div className="proizvodi__box">
                    <img className="proizvodi__img" src={gal1} alt={"pera"} />
                  </div><span className="proizvodi__title">ACTION dark 160x120</span> </a>
                </Col>


                <Col lg={4}>
                  <a href="#"><div className="proizvodi__box">
                    <img className="proizvodi__img" src={gal2} alt={"pera"} />
                  </div> <span className="proizvodi__title">ACTION dark 160x120</span> </a>
                </Col>



              </Row>
            </div>
          </Col>

          <Col lg={4}>
          </Col>
        </Row>
      </section>
    );
  }
}

export default Proizvodi;