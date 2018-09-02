import React, { Component } from 'react';
import Score from './Score';
import './MojBroj.css';

class MojBroj extends Component {

  state = {
    targetNumber: 200,
    target1a: 1,
    target1b: 2,
    target1c: 3,
    target1d: 4,
    target101520: 15,
    target255075100: 100,
    targetArr:[],
    invalidNumber:null,
    InvalidNumberClass:'invalidNumberClass-disabled',
    lastInput:' ',

    dupliNumMesasage: '',
    dupliNumInRowMesasage: '',
    operandMessage: '',

    value: '',
    showValue: 'value--hide',
    buttonIndexArr: [],
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
    let target1a = Math.floor(Math.random() * (max - min + 1)) + min;
    let target1b = Math.floor(Math.random() * (max - min + 1)) + min;
    let target1c = Math.floor(Math.random() * (max - min + 1)) + min;
    let target1d = Math.floor(Math.random() * (max - min + 1)) + min;
    let targetNumber = Math.floor(Math.random() * (max1 - min1 + 1) + min1);
    this.setState({ targetNumber, target1a, target1b, target1c, target1d })
  
  }


  generateTarget15 = () => {
    let target101520 = [10, 15, 20, 10, 15, 20, 10, 15, 20, 10];
    let index = Math.floor(Math.random() * 10);
    target101520 = target101520[index];
    this.setState({ target101520 })
  }

  generateTarget100 = () => {
    let target255075100 = [25, 50, 75, 100, 25, 50, 75, 100, 25, 50];
    let index1 = Math.floor(Math.random() * 10);
    target255075100 = target255075100[index1];
    this.setState({ target255075100 })
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
  findSolutionFull = () => {
    let { targetNumber, target1a, target1b, target1c, target1d, target101520, target255075100 } = this.state;
    let solutionFinal = target1a * target1b;
    let solutionFinalDetaljanOpis = target1a * target1b;

    let solutionFinalOpis = 'Nemam jos uvek kompletno resenje';

    if (targetNumber === solutionFinal) {
      solutionFinalOpis = solutionFinalDetaljanOpis.toString() + ' CESTITAMO konacno resenje';
    } else {
      solutionFinalOpis = 'Nisam nasao resenje jos'
    }
    this.setState({ solutionFinal, solutionFinalOpis });
  }
  //////////////////ALGORITAM////////////////////////////////////
  findAlgoritam = () => {
    let { targetNumber, target1a, target1b, target1c, target1d, target101520, target255075100 } = this.state;
    let NumbersArrSingl = [target1a, target1b, target1c, target1d, target101520];
    NumbersArrSingl = NumbersArrSingl.sort(function (a, b) { return a - b });
    console.log(NumbersArrSingl);

    let targetMaxSingl = Math.max(...NumbersArrSingl);
    console.log(targetMaxSingl);

    let firstCalc = targetNumber / target255075100;
    var closest = NumbersArrSingl.reduce(function (prev, curr) {
      return (Math.abs(curr - firstCalc) < Math.abs(prev - firstCalc) ? curr : prev);
    });
    /////////////////////RACUNJANJA///////////////////////////
    let secondCalc = target255075100 * closest;
    let restFromSecondCalc = targetNumber - secondCalc;
    let thirdCal =

      console.log('------------');
    console.log(targetNumber + ' targetNumber');
    console.log(target255075100 + ' maxNumber');
    console.log(firstCalc + ' firstCalc ');
    console.log(closest + ' closest');
    console.log(secondCalc + ' secondCalc');
    console.log(restFromSecondCalc + ' restFromSecondCalc');
    console.log('------------');
    let solutionFinal = target1a * target1b;
    this.setState({ firstCalc, secondCalc });
  }

  ///////////////////////DUGMAD I MANUELNO RACUNJANJE///////////////////////////////

  PerformNumberInput = (number, buttonIn, sFalse) => {
    let { targetNumber, target1a, target1b, target1c, target1d, target101520, target255075100, value, displayValue,numberState, dupliNumMesasage } = this.state;
    let {targetArr}=this.state;
   
    console.log(targetArr+' targetARRR')
  
    if(numberState===true){ 
      targetArr=targetArr.slice();
      targetArr.push(number);
      this.setState({targetArr});
    
    target1a === number ? this.setState({ disabledButt1: true }) : null;
    target1b === number ? this.setState({ disabledButt2: true }) : null;
    target1c === number ? this.setState({ disabledButt3: true }) : null;
    target1d === number ? this.setState({ disabledButt4: true }) : null;
    target101520 === number ? this.setState({ disabledButt5: true }) : null;
    target255075100 === number ? this.setState({ disabledButt6: true }) : null;

    target1a === number ? this.setState({ ButtClass1: 'button-disabled' }) : null;
    target1b === number ? this.setState({ ButtClass2: 'button-disabled' }) : null;
    target1c === number ? this.setState({ ButtClass3: 'button-disabled' }) : null;
    target1d === number ? this.setState({ ButtClass4: 'button-disabled' }) : null;
    target101520 === number ? this.setState({ ButtClass5: 'button-disabled' }) : null;
    target255075100 === number ? this.setState({ ButtClass6: 'button-disabled' }) : null;
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
    
     
  }
  ///////////////////////////////////////////////////////////////
  PerformOperandInput = (operand, buttonIn, sFalse) => {
    let { targetNumber, target1a, target1b, target1c, target1d, target101520, target255075100, value, displayValue,numberState, dupliNumMesasage } = this.state;
    
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
    let { targetNumber, target1a, target1b, target1c, target1d, target101520, target255075100, value, displayValue } = this.state;
    targetNumber = target1a = target1b = target1c = target1d = target101520 = target255075100 = value = 0;
    displayValue = '';
    value = '';
    let win = this.state.score.win;
    let loss = this.state.score.loss;
    this.setState({

      inputArr: [],
      targetNumber, target1a, target1b, target1c, target1d, target101520,
      target255075100, value, displayValue, numberState: true, operandState: true, dupliNumMesasage: '',
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
    let { targetNumber, target1a, target1b, target1c, target1d, target101520, target255075100,numberState, value, displayValue,targetArr } = this.state;
    targetArr=targetArr.slice();
    let targetArrLength = targetArr.length;
     if(numberState===false){

      let buttonLast = targetArr.slice(targetArrLength - 1, targetArrLength);
      targetArr=targetArr.slice(0,targetArrLength-1);
      this.setState({targetArr});
     
      console.log(buttonLast+' BUTTONLAST')
      console.log(targetArr + ' TARGET ARR');
  
      buttonLast == target1a ? this.setState({ disabledButt1: false }) : null;
      buttonLast == target1b ? this.setState({ disabledButt2: false }) : null;
      buttonLast == target1c ? this.setState({ disabledButt3: false }) : null;
      buttonLast == target1d ? this.setState({ disabledButt4: false }) : null;
      buttonLast == target101520 ? this.setState({ disabledButt5: false }) : null;
      buttonLast == target255075100 ? this.setState({ disabledButt6: false }) : null;
  
      buttonLast == target1a ? this.setState({ ButtClass1: 'button-enabled' }) : null;
      buttonLast == target1b ? this.setState({ ButtClass2: 'button-enabled' }) : null;
      buttonLast == target1c ? this.setState({ ButtClass3: 'button-enabled' }) : null;
      buttonLast == target1d ? this.setState({ ButtClass4: 'button-enabled' }) : null;
      buttonLast == target101520 ? this.setState({ ButtClass5: 'button-enabled' }) : null;
      buttonLast == target255075100 ? this.setState({ ButtClass6: 'button-enabled' }) : null;
      
      let displayValueLength = displayValue.length;
      displayValue = displayValue.slice(0, displayValueLength - 1);
  
      this.setState({
        displayValue: displayValue,
        buttonLast: buttonLast,
        operandMessage: '',
        dupliNumInRowMesasage: '',
       
      });
  
      console.log(displayValue + ' displayvalue');

     } 
  

  }


  render() {
    let { targetNumber, target1a, target1b, target1c, target1d, target101520, target255075100 } = this.state;
    return (
      <div className='main'>
        <p>f</p>
        <p>f</p>
        <p>f</p>
        <div><per>{JSON.stringify(this.state, null, 2)}</per></div>
        <Score generate={this.generateTarget} win={this.state.score.win} loss={this.state.score.loss} message={this.state.score.message} />

        <div>
          <button className='button-target'>TRAZENI BROJ-- {this.state.targetNumber}</button>
        </div>

        <div className='buttonGroup'>
          <div>
            <h3>UZ POMOC BROJEVA </h3>
            <button className={this.state.ButtClass1}  disabled={this.state.disabledButt1} onClick={()=>this.BackSpace(target1a)} onClick={() => this.PerformNumberInput(target1a, 1)}>{target1a}</button>
            <button className={this.state.ButtClass2} disabled={this.state.disabledButt2}  onClick={() => this.PerformNumberInput(target1b, 2)}>{target1b}</button>
            <button className={this.state.ButtClass3} disabled={this.state.disabledButt3}  onClick={() => this.PerformNumberInput(target1c, 3)}>{target1c}</button>
            <button className={this.state.ButtClass4} disabled={this.state.disabledButt4}  onClick={() => this.PerformNumberInput(target1d, 4)}>{target1d}</button>
            <button className={this.state.ButtClass5} disabled={this.state.disabledButt5}  onClick={() => this.PerformNumberInput(target101520, 5)}>{target101520}</button>
            <button className={this.state.ButtClass6} disabled={this.state.disabledButt6}  onClick={() => this.PerformNumberInput(target255075100, 6)}>{target255075100}</button>
            <button className={this.state.InvalidNumberClass} >{this.state.invalidNumber}</button>
          </div>
          <div>
            <button className='button-detaljnije' value={'+'} onClick={() => this.PerformOperandInput('+', '+', false)}>+</button>
            <button className='button-detaljnije' value={'-'} onClick={() => this.PerformOperandInput('-', '-', false)}>-</button>
            <button className='button-detaljnije' value={'*'} onClick={() => this.PerformOperandInput('*', '*', false)}>*</button>
            <button className='button-detaljnije' value={'/'} onClick={() => this.PerformOperandInput('/', '/', false)}>/</button>
            <button className='button-detaljnije' value={'('} onClick={() => this.PerformOperandInput('(', '(', false)}>(</button>
            <button className='button-detaljnije' value={')'} onClick={() => this.PerformOperandInput(')', ')', false)}>)</button>
          </div>
        </div>
        <div>

          <h2>PLAYERS INPUT: {this.state.dupliNumMesasage} {this.state.dupliNumInRowMesasage} {this.state.operandMessage}</h2>
          <button className='button-detaljnije' onClick={this.DeleteInputs}>OBRISI</button>
          <div className='playersIput'>{this.state.displayValue}  =
          <p className={this.state.showValue}> {this.state.value}</p>
          </div>
          <br></br>
          <button className='button-detaljnije' onClick={this.Calculate}>IZRACUNAJ</button>
          <button className='button-detaljnije' onClick={this.ClearAll}>RESETUJ SVE</button>
          <button className='button-target' onClick={this.generateSolution}>POGLEDAJ RESENJE</button>

        </div>
      </div>
    )

  }
}

export default MojBroj;