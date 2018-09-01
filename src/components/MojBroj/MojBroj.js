import React, { Component } from 'react';
import Score from './Score';

class MojBroj extends Component {

  state = {
    targetNumber: 200,
    target1a: 1,
    target1b: 2,
    target1c: 3,
    target1d: 4,
    target101520: 15,
    target255075100: 100,

    dupliNumMesasage: '',
    dupliNumInRowMesasage: '',

    value: '',
    displayValue: '',
    inputArr: [],
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
    //  this.findSolutionQuick();
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

  PerformNumberInput = (number,sTrue,sFalse) => {

    let { value } = this.state;
    let inputArr = this.state.inputArr.slice();
    let dupliNum = inputArr.indexOf(number);
    let { displayValue } = this.state;
    let { dupliNumMesasage } = this.state;
    console.log(inputArr + 'INPUT ARRAY');
    console.log( this.state.numberState + '  numberState')

    dupliNum=== -1 && this.state.numberState===true ? inputArr.push(number):null;
    dupliNum=== -1 && this.state.numberState===true ? 

        this.setState({
          inputArr: inputArr,
          displayValue:  displayValue + String(number),
          value: value + String(number),
          numberState: false,
          operandState:true,
          
        })
        :null;

        dupliNum !== -1  ? 
        this.setState({
          dupliNumMesasage: 'Ne moze isti broj dva puta',
          dupliNumInRowMesasage: ''
        }) : this.setState({
          dupliNumMesasage: '',
          dupliNumInRowMesasage: ''
        })

        this.state.numberState===false  ? 
        this.setState({
          dupliNumMesasage: '',
          dupliNumInRowMesasage: 'Ne mogu dva broja zaredom'
        }) : null

    console.log(this.state.dupliNumMesasage + ' dupliNUMmessage')
      }
      
      PerformOperandInput=(operand,sTrue,sFalse)=>{
        let {numberState} = this.state;
        let { value } = this.state;
        let inputArr = this.state.inputArr.slice();
        let dupliNum = inputArr.indexOf(operand);
        let { displayValue } = this.state;
        let { dupliNumMesasage } = this.state;
        console.log(inputArr + 'INPUT ARRAY');
        console.log(dupliNum  + ' dupliNum')
    
         this.state.operandState===true ? 
          this.setState({
            displayValue:  displayValue + String(operand)  ,
            value: value + String(operand),
            numberState: true,
            operandState:false,
            dupliNumMesasage: '',
            dupliNumInRowMesasage: ''
          })
           :null;
        }
  
    // let { prevValue } = this.state;
    // let { operandState } = this.state;

    // let nextValue = operand;

    // const operations = {
    //   '+': (prevValue, nextValue) => { prevValue + nextValue },
    //   '-': (prevValue, nextValue) => { prevValue - nextValue },
    //   '*': (prevValue, nextValue) => { prevValue * nextValue },
    //   '/': (prevValue, nextValue) => { prevValue / nextValue },
    //   '(': (prevValue, nextValue) => { nextValue },
    //   ')': (prevValue, nextValue) => { nextValue },
    //   '=': (prevValue, nextValue) => { nextValue }
    // }
    // // if(value==null){
    //   this.setState({
    //     value: value+String(operand),
    //   });
    // } else if( operandState){
    //   let currentValue = value || 0;
    //  // let computedValue = operations[operand](currentValue,nextValue)
    //   this.setState({
    //   //  value: computedValue,

    //   });
    // }

    // console.log(prevValue + ' prevVALUE')
    // console.log(nextValue + ' nextVALUE')
    // console.log(operandState + ' operandState')
    // console.log(numSwitch + ' NUMSWITCH')
    // let calculationFinal=operations[digit](prevValue,nextValue);

  


  Calculate = () => {
    let { value } = this.state;
    console.log(value + ' VALUE')
    value = eval(value);
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
        score: {
          win: win,
          loss: loss + 1,
          message: message + ' :( NIJE TACNO RESENJE'
        }
      });
    }

    console.log(this.state.score.win);
    console.log(this.state.score.loss);
    this.setState({ value })
  }

  ClearAll = () => {
    let { targetNumber, target1a, target1b, target1c, target1d, target101520, target255075100, value, displayValue } = this.state;
    targetNumber = target1a = target1b = target1c = target1d = target101520 = target255075100 = value = 0;
    displayValue = '';
    value = '';
    let win = this.state.score.win;
    let loss = this.state.score.loss;
    console.log(targetNumber, target1a, target1b, target1c, target1d, target101520, target255075100)
    this.setState({

      inputArr: [],
      targetNumber, target1a, target1b, target1c, target1d, target101520,
       target255075100, value, displayValue, numberState:true, operandState:true,dupliNumMesasage: '',
       dupliNumInRowMesasage: 'Ne mogu dva broja zaredom'
      , score: {
        win: win,
        loss: loss,
        message: ''
      },
    });
  }

  DeleteInputs=()=>{
        let { displayValue}=this.state;
          let displayValueLength = displayValue.length;
          displayValue=  displayValue.slice(0,displayValueLength-1);
        this.setState({
             displayValue: displayValue
        });
        console.log(displayValue+' displayvalue')
  }

  render() {
    let { targetNumber, target1a, target1b, target1c, target1d, target101520, target255075100 } = this.state;
    return (
      <div>
        <p>f</p>
        <p>f</p>
        <p>f</p>
        <Score win={this.state.score.win} loss={this.state.score.loss} message={this.state.score.message} />
        <div><per>{JSON.stringify(this.state,null,2)}</per></div>

        <button className='button-detaljnije' onClick={this.generateTarget}>IZABERI BROJ</button>
        <button className='button-detaljnije' onClick={this.generateSolution}>POGLEDAJ  RESENJE</button>
        <h2>PRONADJI BROJ-- {this.state.targetNumber}</h2>
        <h3>UZ POMOC BROJEVA : [{this.state.target1a}] [{this.state.target1b}]
          [{this.state.target1c}] [{this.state.target1d}] --- [{this.state.target101520}] --- [{this.state.target255075100}]
          </h3>

        <button className='button-detaljnije Broj' onClick={() => this.PerformNumberInput(target1a,true,false)}>{target1a}</button>
        <button className='button-detaljnije' value={target1b} onClick={() => this.PerformNumberInput(target1b,true,false)}>{target1b}</button>
        <button className='button-detaljnije' value={target1c} onClick={() => this.PerformNumberInput(target1c,true,false)}>{target1c}</button>
        <button className='button-detaljnije' value={target1d} onClick={() => this.PerformNumberInput(target1d,true,false)}>{target1d}</button>
        <button className='button-detaljnije' value={target101520} onClick={() => this.PerformNumberInput(target101520,true,false)}>{target101520}</button>
        <button className='button-detaljnije' value={target255075100} onClick={() => this.PerformNumberInput(target255075100,true,false)}>{target255075100}</button>
        <br></br>
        <button className='button-detaljnije' value={'+'} onClick={() => this.PerformOperandInput('+',true,false)}>+</button>
        <button className='button-detaljnije' value={'-'} onClick={() => this.PerformOperandInput('-',true,false)}>-</button>
        <button className='button-detaljnije' value={'*'} onClick={() => this.PerformOperandInput('*',true,false)}>*</button>
        <button className='button-detaljnije' value={'/'} onClick={() => this.PerformOperandInput('/',true,false)}>/</button>
        <button className='button-detaljnije' value={'('} onClick={() => this.PerformOperandInput('(',true,false)}>(</button>
        <button className='button-detaljnije' value={')'} onClick={() => this.PerformOperandInput(')',true,false)}>)</button>
        <div>

          <h2>PLAYERS INPUT</h2>
          <button className='button-detaljnije' onClick={this.DeleteInputs}>OBRISI</button>
          <h2>{this.state.dupliNumMesasage} {this.state.dupliNumInRowMesasage}</h2>
          <h2>{this.state.displayValue} -DISPLAY VALUE</h2>
          <h2>VASE RESENJE JE: {this.state.value}-VALUE</h2>
          <button className='button-detaljnije' onClick={this.Calculate}>IZRACUNAJ</button>
          <button className='button-detaljnije' onClick={this.ClearAll}>RESETUJ SVE</button>
         
        </div>
        {/* <div className='resenje'><h3>resenje je: --{this.state.solutionQuick}-- {this.state.text}</h3>
          <h3>{this.state.solutionFinal}</h3>
          <h3>{this.state.solutionFinalOpis}</h3>
          <p>{this.state.firstCalc}-firstCalc</p>
          <p>{this.state.secondCalc}-secondCalc</p>
        </div> */}


      </div>

    )

  }
}

export default MojBroj;