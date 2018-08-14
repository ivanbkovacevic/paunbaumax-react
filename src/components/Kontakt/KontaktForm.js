import React, { Component } from 'react';
import { Grid, Row, Col, Button } from 'react-bootstrap';

class KontaktForm extends Component {

    state = {
        ime:'',
        email:'',
        poruka:''
    };

    handleChange=(event)=> {
       
        const value = event.target.value;
        const name = event.target.name;

        this.setState({[name]:value});
      
      }
    
      handleSubmit=(event)=> {
        event.preventDefault();
        this.props.handleSub(this.state)

       console.log(this.state);
        // this.setState({
        //     ime:'',
        //     email:'',
        //     poruka:''
        // });
       
      }

    render() {
        return (
            <div>
                 <form onSubmit={this.handleSubmit} className="info__container__form">
                    <input type="text" name="ime" value={this.state.ime} onChange={this.handleChange} className="info__container__form--name" placeholder="Ime" />
                    <input type="email"  name="email" value={this.state.email} onChange={this.handleChange} className="info__container__form--email" placeholder="Email" />
                    <textarea type="text" name="poruka" value={this.state.poruka} onChange={this.handleChange} cols="50" className="info__container__form--poruka">Poruka</textarea>
                    <Button onClick={event=>this.handleSubmit(event)}  className="button-detaljnije">POSALJI</Button>
                </form>
            </div>
        );
    }
}

export default KontaktForm;