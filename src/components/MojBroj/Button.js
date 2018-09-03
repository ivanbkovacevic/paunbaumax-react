import React, { Component } from 'react';

class Button extends Component {

    HandleClick=(event)=>{
      
        let dugbr= event.target.dugbr
        let value= event.target.value
        let ime=event.target.name
        console.log(this.props)
    }
 
    render() {
        return (
            
             <span><button datdugbr={this.props.dugmebr} nametest='ivan' onClick={this.HandleClick} className={this.props.classa}>{this.props.value}</button></span>
            
        );
    }
}

export default Button;