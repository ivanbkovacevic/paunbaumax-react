import React, { Component } from 'react';
import Button from './Button';

class ButtonTest extends Component {

    state={
        dugmad:[]
    }

    NapraviDugme=()=>{
        let targetInititalArr=this.props.target;
        let {dugmad}=this.state;
        for(let i in targetInititalArr){
          let dugme= <Button dugmebr={i}  classa={'button-enabled'} value={targetInititalArr[i]}/>   
          dugmad.push(dugme);
        }   
       this.setState({dugmad});
      
    }
 
    render() {
        return (
            <div>
            <p onClick={this.NapraviDugme}> - NAPRAVI DUGME</p>
            <div>{
                this.state.dugmad.map((dugme,i)=>{
                    return <span key={i}>{dugme}</span>
                })
                }</div>
        </div>
        );
    }
}

export default ButtonTest;