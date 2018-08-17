import React, { Component } from 'react';
import { Grid, Row, Col, Checkbox, Button,FormGroup } from 'react-bootstrap';
import gal1 from './img-gallery/dark-1.jpg';
import gal2 from './img-gallery/darkPaint.jpg';
import axios from 'axios';

class Proizvodi extends Component {

  state = {
  
    proizvodi: [],
    categories:[],
    proizvodiSelected:[],
    categoriesSelected:[''],
    categoriesArray:[]
  }

  componentDidMount() {
    axios.get(`https://panbaumax.000webhostapp.com/wp-json/wp/v2/proizvodi/?per_page=100`)
      .then(res => {
        const proizvodi = res.data;
        this.setState({ proizvodi });
        console.log(proizvodi); 
      })

      axios.get(`https://panbaumax.000webhostapp.com/wp-json/wp/v2/categories/?per_page=50`)
      .then(res => {
        const categories = res.data;
        this.setState({ categories });
        console.log(categories); 

        var allCategories=[];

        for(var prop in categories){
          var category = {
                          id:categories[prop].id,
                          name:categories[prop].name,
                          parent:[categories[prop].parent],
                          selected: false 
                        }
                          for(var i in categories){
                            if(category.parent[0]===categories[i].id){
                              if(categories[i].parent !==0 && categories[i].parent !==6){
                                category.parent.push(categories[i].parent)
                              }
                            }
                          }
          allCategories.push(category);
        }
      
        console.log(allCategories)
      })
   
  }

  filterCat=(naziv,index)=>{
    let catIndexi= [...this.state.categoriesArray,index];
    let i=0;
    let proizvodiSelected =[];

    for(var prop in catIndexi){
       let sortIndex= catIndexi[prop];
       console.log(sortIndex);
      
       proizvodiSelected = this.state.proizvodi.filter(kategorija => kategorija.categories[i] === catIndexi[0]);
    }
   
    
    let catNaziv = [...this.state.categoriesSelected, naziv];
    this.setState({proizvodiSelected, categoriesSelected:catNaziv, categoriesArray:catIndexi});
    console.log(proizvodiSelected);
    console.log(this.state.categoriesSelected);
    console.log(catIndexi);
  }

  // filterBeton=(naziv,index)=>{
  //   let proizvodiSelected = this.state.proizvodi.filter(kategorija => kategorija.categories[0] === index);
  //   let catNazivBeton =[...this.state.categoriesSelected, naziv];
  //   this.setState({proizvodiSelected, categoriesSelected:catNazivBeton});
  //   console.log(proizvodiSelected);
  //   console.log(this.state.categoriesSelected);
  // }
  

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

               <p onClick={()=>this.filterCat('Drvo',13)}>DRVO</p>
                <p onClick={()=>this.filterCat('Beton',35)}>BETON</p>
                  <ul>
                    {
                   this.state.categoriesSelected.map(cat=>{
                     return <li key={cat}>{cat}</li>
                   })
                 }
                </ul>
                <ul className="proizvodi__container__filter--1--ul"><svg className="icon-strelica">
                  <use xlinkHref="sprite.svg#icon-chevron-thin-down"></use>
                </svg>
               
                 {
                   this.state.categories.map(cat=>{
                     return <li key={cat.id}>{cat.id}--{cat.name}</li>
                   })
                 }
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
          <ul>
        {this.state.proizvodiSelected.map(proizvod =>
        <li key={proizvod.id}>
          {proizvod.title.rendered}-//-
          {proizvod.categories}</li>
        
       )}
      </ul>
          -------------------------------------
          <ul>
        {this.state.proizvodi.map(proizvod =>
        <li key={proizvod.id}>
          {proizvod.title.rendered}-//-
          {proizvod.categories}</li>  
       )}
      </ul>
      ------------------------
    
     
          </Col>
        </Row>
      </section>
    );
  }
}

export default Proizvodi;