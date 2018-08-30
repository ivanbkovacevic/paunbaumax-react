import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Navigation from '../src/components/Navigation/Navigation';
import Footer from './components/Footer/Footer';
import Home from '../src/components/Home/Home';
import Onama from '../src/components/Onama/Onama';
import Reference from '../src/components/Reference/Reference';
import Kontakt from '../src/components/Kontakt/Kontakt';
import Proizvodi from '../src/components/Proizvodi/Proizvodi';
import MojBroj from '../src/components/MojBroj/MojBroj';

class App extends Component {
  render() {
    return (
    <div>
        <Navigation />
          <Switch>      
            <Route path="/onama" component={Onama}/>
            <Route path="/reference" component={Reference}/>
            <Route path="/kontakt" component={Kontakt}/>
            <Route path="/proizvodi" component={Proizvodi}/>  
            <Route path="/mojbroj" component={MojBroj}/>  
            <Route path="/" exact component={Home}/>        
          </Switch>  
       <Footer />
      
       
     </div>
 
    );
  }
}

export default App;
