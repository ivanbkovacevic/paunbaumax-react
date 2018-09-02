import React, { Component } from 'react';

class Score extends Component {
    render() {
        return (
            <div>
                 <button className='button-detaljnije' onClick={this.props.generate}>IZABERI BROJ</button>
                <h1>REZULTAT</h1>
                <h2>POBEDE: {this.props.win} PORAZI: {this.props.loss} </h2>
                <h2>{this.props.message}</h2>
               
            </div>
        );
    }
}

export default Score;