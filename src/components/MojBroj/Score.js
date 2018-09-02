import React, { Component } from 'react';
import './MojBroj.css';

class Score extends Component {
    render() {
        return (
            <div>
                
                <h1>REZULTAT</h1>
                <h3>POBEDE: <button className='button-win'>{this.props.win} </button> </h3>
                <h3>PORAZI  : <button className='button-loss'>{this.props.loss} </button>  </h3>
                <h5>{this.props.message}</h5>
                <button className='button-detaljnije' onClick={this.props.generate}>IZABERI BROJ</button>
               
            </div>
        );
    }
}

export default Score;