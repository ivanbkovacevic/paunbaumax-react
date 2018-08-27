import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import gal1 from './img-gallery/dark-1.jpg';
import gal2 from './img-gallery/darkPaint.jpg';
import axios from 'axios';
import ProizvodCategory from './ProizvodCategory';

class Proizvodi extends Component {

  state = {
    proizvodi:[],
    allCategories:[],
    subCatShow:[],
    kljuc:true
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
        const JSONcategories = res.data;
        this.setState({ JSONcategories });
        console.log(JSONcategories); 

        var allCategories=[];

        for(var prop in JSONcategories){
          var category = {
                          id: JSONcategories[prop].id,
                          name: JSONcategories[prop].name,
                          parent: [JSONcategories[prop].parent],
                          selected: false,
                          subCat: []
                         
                         
                        }

                          for(var i in JSONcategories){
                            if(category.parent[0]===JSONcategories[i].id){
                              if(JSONcategories[i].parent !==0 && JSONcategories[i].parent !==6){
                                category.parent.push(JSONcategories[i].parent)
                              }
                            }
                          }

                          for(var ii in JSONcategories){
                            if(JSONcategories[ii].parent===category.id) {
                              category.subCat.push(JSONcategories[ii].id);
                            }
                          }
          allCategories.push(category);
        }
      
        console.log(allCategories)
        this.setState({allCategories}) 
          })
  }

  showSub=(id)=>{
    let idSelected = id;
    let {subCatShow}=this.state;
    console.log(id);
    let allCategories=this.state.allCategories;
    for(var prop in allCategories){
        if(allCategories[prop].id===idSelected){
         allCategories[prop].selected = true;
        subCatShow.push(idSelected);    
        }
    }
     this.setState({allCategories,subCatShow});
     console.log(this.state.subCatShow);

      let subCatShowDel=this.state.subCatShow;
       if(subCatShowDel[1]===idSelected){
         subCatShowDel.splice(0,1);
         this.setState({subCatShow:subCatShowDel});
         console.log(this.state.subCatShow)
       }

      
     
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
              <ul>
                   {
                   this.state.allCategories.map(cat=>{      
                     if(cat.id===2){
                      return <ProizvodCategory
                      showSub={()=>this.showSub(cat.id)} 
                      key={cat.id}
                      catIme={cat.name} />     
                     }                                   
                   })
                 }
              </ul>
                   
                 <ul>
            
                   {
                      this.state.allCategories.map(cat=>{ 
                  
                        if(cat.parent[0]===2 && this.state.subCatShow[0]===cat.parent[0]){            
                            return <ProizvodCategory 
                            key={cat.id}
                            catIme={cat.name} />            
                          }                                              
                      })         
                 }
                
              </ul>

               <ul>
                   {
                   this.state.allCategories.map(cat=>{      
                     if(cat.parent[0]===11){
                      return <ProizvodCategory 
                      key={cat.id}
                      catIme={cat.name} />   
                     }                                   
                   })
                 }
              </ul>
                
                  <ul>
                  {
                  this.state.allCategories.map(cat=>{      
                    if( cat.parent[0]===12){
                      if(cat.selected ===true){
                        return <li key={cat.id}>
                        {cat.name} - {cat.selected}
                      </li>     
                    }     }                              
                  })
                
                }
             </ul>
               

                <ul className="proizvodi__container__filter--1--ul"><svg className="icon-strelica">
                  <use xlinkHref="sprite.svg#icon-chevron-thin-down"></use>
                </svg>
                             
                </ul>
              </div>
            </div>
          </Col>

          <Col lg={5}>
            <div className="proizvodi__container__proizvodi">
              <h2 className="h2">Proizvodi</h2> <div className="proizvodi linija"></div>
              <Row>

                <Col lg={4}>
                  <a href="/3"><div className="proizvodi__box">
                    <img className="proizvodi__img" src={gal1} alt={"pera"} />
                  </div> <span className="proizvodi__title">ACTION dark 160x120</span> </a>
                </Col>

                <Col lg={4}>
                  <a href="/3"><div className="proizvodi__box">
                    <img className="proizvodi__img" src={gal1} alt={"pera"} />
                  </div><span className="proizvodi__title">ACTION dark 160x120</span> </a>
                </Col>


                <Col lg={4}>
                  <a href="/3"><div className="proizvodi__box">
                    <img className="proizvodi__img" src={gal2} alt={"pera"} />
                  </div> <span className="proizvodi__title">ACTION dark 160x120</span> </a>
                </Col>

                <Col lg={4}>
                  <a href="/3"><div className="proizvodi__box">
                    <img className="proizvodi__img" src={gal1} alt={"pera"} />
                  </div> <span className="proizvodi__title">ACTION dark 160x120</span> </a>
                </Col>

                <Col lg={4}>
                  <a href="/3"><div className="proizvodi__box">
                    <img className="proizvodi__img" src={gal1} alt={"pera"} />
                  </div><span className="proizvodi__title">ACTION dark 160x120</span> </a>
                </Col>


                <Col lg={4}>
                  <a href="/2"><div className="proizvodi__box">
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