import React, { Component } from 'react';
import Score from './Score';
import './MojBroj.css';

class MojBroj extends Component {

  state = {
    targetNumber: 200,
    target1: 1,
    target2: 2,
    target3: 3,
    target4: 4,
    target5: 15,
    target6: 100,
    targetArr:[],
    targetNumbers:[],

    lastInput:' ',

    dupliNumMesasage: '',
    dupliNumInRowMesasage: '',
    operandMessage: '',

    value: '',
    showValue: 'value--hide',
    buttonLast: null,

    disabled:false,
    disabledButt1: false,
    disabledButt2: false,
    disabledButt3: false,
    disabledButt4: false,
    disabledButt5: false,
    disabledButt6: false,
    ButtClass1: 'button-enabled',
    ButtClass2: 'button-enabled',
    ButtClass3: 'button-enabled',
    ButtClass4: 'button-enabled',
    ButtClass5: 'button-enabled',
    ButtClass6: 'button-enabled',

    displayValue: '',

    numberState: true,
    operandState: true,

    score: {
      win: 0,
      loss: 0,
      message: ''
    },
    solutionQuick: 'quick',
    text: 'trazi i dalje',
    solutionFull: 2,
    solutionFinal: '',
    solutionFinalOpis: '',
    firstCalc: 0,
    secondCalc: 0
  }

  generateTargetsingl = () => {
    let min = 1;
    let max = 9;
    let min1 = 100;
    let max1 = 900;
    let target1 = Math.floor(Math.random() * (max - min + 1)) + min;
    let target2 = Math.floor(Math.random() * (max - min + 1)) + min;
    let target3 = Math.floor(Math.random() * (max - min + 1)) + min;
    let target4 = Math.floor(Math.random() * (max - min + 1)) + min;
    let targetNumber = Math.floor(Math.random() * (max1 - min1 + 1) + min1);
    this.setState({ targetNumber, target1, target2, target3, target4 })
  
  }


  generateTarget15 = () => {
    let target5 = [10, 15, 20, 10, 15, 20, 10, 15, 20, 10];
    let index = Math.floor(Math.random() * 10);
    target5 = target5[index];
    this.setState({ target5 })
  }

  generateTarget100 = () => {
    let target6 = [25, 50, 75, 100, 25, 50, 75, 100, 25, 50];
    let index1 = Math.floor(Math.random() * 10);
    target6 = target6[index1];
    this.setState({ target6 })
  }
  ///////////////////////// GLAVNA ///////////////////////////////
  generateTarget = () => {
    this.generateTargetsingl();
    this.generateTarget15();
    this.generateTarget100();
  }


  generateSolution = () => {
    this.findSolutionFull();
    this.findAlgoritam();
  }
  ///////////////////////////////////////////////////



  /////////////////OVA TREBA DA VRATI KONACNO RESENJE////////////////////////////////////
 
    /////////////////////RACUNJANJA///////////////////////////


  ///////////////////////DUGMAD I MANUELNO RACUNJANJE///////////////////////////////
//  PerformInputSolo1=(number)=>{
//   let { targetNumber, target1, target2, target3, target4, target5, target2, value, displayValue,numberState, dupliNumMesasage } = this.state;
//   let {targetArr}=this.state;

//    if(numberState===true){ 
//       targetArr=targetArr.slice();

//       targetArr.push(number);
//       this.setState({targetArr});

//       this.setState({ disabledButt1: true, ButtClass1: 'button-disabled' ,
//       displayValue: displayValue + String(number),
//       value: value + String(number),
//       numberState: false,
//       dupliNumMesasage: '',
//       dupliNumInRowMesasage: '',
//       operandMessage: '', }) 
    
  
//     }else{
//       this.setState({
//         dupliNumInRowMesasage: 'Ne mogu dva broja zaredom',
//       })
//       ;
//     }

//     let buttonLast=targetArr.slice(-1);
//     this.setState({targetArr});
//     console.log(buttonLast+' LAST BUTTTTON')
  
  

//  }


  PerformNumberInput = (number,index) => {
    let { targetNumber, target1, target2, target3, target4, target5, target6, value, displayValue,numberState, dupliNumMesasage } = this.state;
    let {targetArr}=this.state;
       // targetNumbers=targetNumbers.slice();
    let targetNumbers=[target1, target2, target3, target4];
   
    console.log(targetNumbers+' targetARRR')
    console.log(number+' targetARRR')
    
    if(numberState===true){ 
      targetArr=targetArr.slice();

      targetArr.push(number);
      this.setState({targetArr});
    
    target1 === number && index===1 ? this.setState({ disabledButt1: true, ButtClass1: 'button-disabled'  }) : null;
    target2 === number && index===2 ? this.setState({ disabledButt2: true, ButtClass2: 'button-disabled'  }) : null;
    target3 === number && index===3 ? this.setState({ disabledButt3: true, ButtClass3: 'button-disabled'  }) : null;
    target4 === number && index===4 ? this.setState({ disabledButt4: true, ButtClass4: 'button-disabled'  }) : null;
    target5 === number && index===5 ? this.setState({ disabledButt5: true, ButtClass5: 'button-disabled'  }) : null;
    target6 === number && index===6 ? this.setState({ disabledButt6: true, ButtClass6: 'button-disabled'  }) : null;
 
    this.setState({
      displayValue: displayValue + String(number),
      value: value + String(number),
      numberState: false,
      dupliNumMesasage: '',
      dupliNumInRowMesasage: '',
      operandMessage: '',
       })
    }else{
      this.setState({
        dupliNumInRowMesasage: 'Ne mogu dva broja zaredom',
      })
      ;
    }

    let buttonLast=targetArr.slice(-1);
    this.setState({targetArr});
    console.log(buttonLast+' LAST BUTTTTON')
    
     
  }
  ///////////////////////////////////////////////////////////////
  PerformOperandInput = (operand) => {
    let { targetNumber, target1, target2, target3, target4, target5, target6, value, displayValue,numberState, dupliNumMesasage } = this.state;
    
      this.setState({
        displayValue: displayValue + String(operand),
        value: value + String(operand),
        numberState: true,
      })
  }

  Calculate = () => {
    let { value } = this.state;
    let valueIsNumber = value[value.length - 1];
    valueIsNumber = Number(valueIsNumber);

    Number.isInteger(valueIsNumber) ? value = eval(value) : value = 'Niste dobro uneli operaciju';
    let win = this.state.score.win;
    let loss = this.state.score.loss;
    let message = this.state.score.message;
    if (this.state.targetNumber === value) {

      this.setState({
        value,
        score: {
          win: win + 1,
          loss: loss,
          message: message + 'BRAVO! TACNO RESENJE'
        }
      });

    } else {
      this.setState({
        value,
        showValue: 'value--show',
        score: {
          win: win,
          loss: loss + 1,
          message: message + ' :( NIJE TACNO RESENJE'
        }
      });
    }
    this.setState({ value })
  }

  ClearAll = () => {
    let { targetNumber, target1, target2, target3, target4, target5, target6, value, displayValue } = this.state;
    targetNumber = target1 = target2 = target3 = target4 = target5 = target6 = value = 0;
    displayValue = '';
    value = '';
    let win = this.state.score.win;
    let loss = this.state.score.loss;
    this.setState({

      inputArr: [],
      targetNumber, target1, target2, target3, target4, target5,
      target6, value, displayValue, numberState: true, operandState: true, dupliNumMesasage: '',
      dupliNumInRowMesasage: '',
      operandMessage: '',
      showValue: 'value--hide',
      targetArr:[],
      targetArrRemove:[],
      disabledButt1: false,
      disabledButt2: false,
      disabledButt3: false,
      disabledButt4: false,
      disabledButt5: false,
      disabledButt6: false,
      ButtClass1: 'button-enabled',
      ButtClass2: 'button-enabled',
      ButtClass3: 'button-enabled',
      ButtClass4: 'button-enabled',
      ButtClass5: 'button-enabled',
      ButtClass6: 'button-enabled',
      buttonIndexArr:[],

      score: {
        win: win,
        loss: loss,
        message: ''
      },
    });
  }

  DeleteInputs = () => {
    let { targetNumber, target1, target2, target3, target4, target5, target6,numberState, value, displayValue,targetArr } = this.state;
    targetArr=targetArr.slice();
    let targetArrLength = targetArr.length;
     if(numberState===true){

      let buttonLast = targetArr.slice(targetArrLength - 1, targetArrLength);
      targetArr=targetArr.slice(0,targetArrLength-1);
      this.setState({targetArr});
      value.length===0 ? this.setState({numberState:true}) :null;
    
     
      console.log(buttonLast+' BUTTONLAST')
      console.log(targetArr + ' TARGET ARR');
  
      buttonLast == target1 ? this.setState({ disabledButt1: false }) : null;
      buttonLast == target2 ? this.setState({ disabledButt2: false }) : null;
      buttonLast == target3 ? this.setState({ disabledButt3: false }) : null;
      buttonLast == target4 ? this.setState({ disabledButt4: false }) : null;
      buttonLast == target5 ? this.setState({ disabledButt5: false }) : null;
      buttonLast == target6 ? this.setState({ disabledButt6: false }) : null;
  
      buttonLast == target1 ? this.setState({ ButtClass1: 'button-enabled' }) : null;
      buttonLast == target2 ? this.setState({ ButtClass2: 'button-enabled' }) : null;
      buttonLast == target3 ? this.setState({ ButtClass3: 'button-enabled' }) : null;
      buttonLast == target4 ? this.setState({ ButtClass4: 'button-enabled' }) : null;
      buttonLast == target5 ? this.setState({ ButtClass5: 'button-enabled' }) : null;
      buttonLast == target6 ? this.setState({ ButtClass6: 'button-enabled' }) : null;
      
      let displayValueLength = displayValue.length;
      displayValue = displayValue.slice(0, displayValueLength - 1);
      let valueLength = value.length;
      value = value.slice(0, valueLength - 1);
  
      this.setState({
        displayValue: displayValue,
        buttonLast: buttonLast,
        operandMessage: '',
        dupliNumInRowMesasage: '',
        value:value
       
      });
  
      console.log(displayValue + ' displayvalue');

     } 
  

  }


  render() {
    let { targetNumber, target1, target2, target3, target4, target5, target6 } = this.state;
    return (
      <div className='main'>
        <p>f</p>
        <p>f</p>
        <p>f</p>
        <div className='state' ><per>{JSON.stringify(this.state, null, 2)}</per></div>
        <Score generate={this.generateTarget} win={this.state.score.win} loss={this.state.score.loss}  />

        <div>
          <h1 className='trazeniBroj'>TRAZENI BROJ</h1>
         
          <button className='button-target'>{this.state.targetNumber}</button>
          <h3>UZ POMOC BROJEVA </h3>
        </div>

        <div className='buttonGroup'>
           <div className='buttonGroup1'>
              <button className={this.state.ButtClass1}  disabled={this.state.disabledButt1}  onClick={() => this.PerformNumberInput(target1, 1)}>{target1}</button>
              <button className={this.state.ButtClass2} disabled={this.state.disabledButt2}  onClick={() => this.PerformNumberInput(target2, 2)}>{target2}</button>
              <button className={this.state.ButtClass3} disabled={this.state.disabledButt3}  onClick={() => this.PerformNumberInput(target3, 3)}>{target3}</button>
              <button className={this.state.ButtClass4} disabled={this.state.disabledButt4}  onClick={() => this.PerformNumberInput(target4, 4)}>{target4}</button>
              <button className={this.state.ButtClass5} disabled={this.state.disabledButt5}  onClick={() => this.PerformNumberInput(target5, 5)}>{target5}</button>
              <button className={this.state.ButtClass6} disabled={this.state.disabledButt6}  onClick={() => this.PerformNumberInput(target6, 6)}>{target6}</button>
            </div>
            <div className='buttonGroup2'>
              <button className='button-detaljnije' value={'+'} onClick={() => this.PerformOperandInput('+')}>+</button>
              <button className='button-detaljnije' value={'-'} onClick={() => this.PerformOperandInput('-')}>-</button>
              <button className='button-detaljnije' value={'*'} onClick={() => this.PerformOperandInput('*')}>*</button>
              <button className='button-detaljnije' value={'/'} onClick={() => this.PerformOperandInput('/')}>/</button>
              <button className='button-detaljnije' value={'('} onClick={() => this.PerformOperandInput('(')}>(</button>
              <button className='button-detaljnije' value={')'} onClick={() => this.PerformOperandInput(')')}>)</button>
            </div>
        </div>
        <div>

          <h2>PLAYERS INPUT: {this.state.dupliNumMesasage} {this.state.dupliNumInRowMesasage} {this.state.operandMessage}</h2>
         
          <div className='playersIput'>{this.state.displayValue}  =
             <p className={this.state.showValue}> {this.state.value} </p>
             <p>{this.state.score.message}</p>

          </div>
          <br></br>
          <button className='button-detaljnije' onClick={this.Calculate}>IZRACUNAJ</button>
          <button className='button-detaljnije' onClick={this.DeleteInputs}>OBRISI POSLEDNJE</button>
          <button className='button-detaljnije' onClick={this.ClearAll}>RESETUJ SVE</button>
          <button className='button-detaljnije' onClick={this.generateSolution}>POGLEDAJ RESENJE</button>

        </div>
      </div>
    )

  }
}

export default MojBroj;