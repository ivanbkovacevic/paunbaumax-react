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

    dupliNumMesasage: '',
    dupliNumInRowMesasage: '',
    operandMessage:'',

    value: '',
    showValue:'value--hide',
    buttonIndexArr:[],

    disabledButt1:false,
    disabledButt2:false,
    disabledButt3:false,
    disabledButt4:false,
    disabledButt5:false,
    disabledButt6:false,
    disabledButtClass1:'button-detaljnije',
    disabledButtClass2:'button-detaljnije',
    disabledButtClass3:'button-detaljnije',
    disabledButtClass4:'button-detaljnije',
    disabledButtClass5:'button-detaljnije',
    disabledButtClass6:'button-detaljnije',

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
 
  PerformNumberInput = (number,buttonIn,sFalse) => {
     let buttonIndexArr=this.state.buttonIndexArr.slice();
     let buttonIndex =buttonIn;
     buttonIndexArr.push(buttonIndex);
     this.setState({buttonIndexArr});
  buttonIndex===1 ? this.setState({disabledButt1:true}):null;
  buttonIndex===2 ? this.setState({disabledButt2:true}):null;
  buttonIndex===3 ? this.setState({disabledButt3:true}):null;
  buttonIndex===4 ? this.setState({disabledButt4:true}):null;
  buttonIndex===5 ? this.setState({disabledButt5:true}):null;
  buttonIndex===6 ? this.setState({disabledButt6:true}):null;

  buttonIndex===1 ? this.setState({disabledButtClass1:'button-disabled'}):null;
  buttonIndex===2 ? this.setState({disabledButtClass2:'button-disabled'}):null;
  buttonIndex===3 ? this.setState({disabledButtClass3:'button-disabled'}):null;
  buttonIndex===4 ? this.setState({disabledButtClass4:'button-disabled'}):null;
  buttonIndex===5 ? this.setState({disabledButtClass5:'button-disabled'}):null;
  buttonIndex===6 ? this.setState({disabledButtClass6:'button-disabled'}):null;


    let { value } = this.state;
    let { displayValue } = this.state;
    let { dupliNumMesasage } = this.state;
   
    this.state.numberState===true ? 
        this.setState({     
          displayValue:  displayValue + String(number),
          value: value + String(number),
          numberState: false,
          operandState:true,
          dupliNumMesasage: '',
          dupliNumInRowMesasage: '',
          operandMessage:'',

        })
        :
        this.setState({
          operandState:true,
          dupliNumInRowMesasage: 'Ne mogu dva broja zaredom',
        })
        ;

    console.log(this.state.dupliNumMesasage + ' dupliNUMmessage')
      }
      /////////////////////////////////////////////////////////////////
      PerformOperandInput=(operand,buttonIn,sFalse)=>{

        let buttonIndexArr=this.state.buttonIndexArr.slice();
        let buttonIndex =buttonIn;
        buttonIndexArr.push(buttonIndex);
        this.setState({buttonIndexArr});

        let {numberState} = this.state;
        let { value } = this.state;
        let { displayValue } = this.state;
        let { dupliNumMesasage } = this.state;

         this.state.operandState===true ? 
          this.setState({
            displayValue:  displayValue + String(operand)  ,
            value: value + String(operand),
            numberState: true,
            operandState:false,
            dupliNumMesasage: '',
            dupliNumInRowMesasage: '',
          })
           :   this.setState({
           
            operandMessage:'Ne mogu dve operacije da stoje jedna pored druge',
            dupliNumMesasage: '',
            dupliNumInRowMesasage: ''
           
          });

        }
  
  Calculate = () => {
    let { value } = this.state;
    console.log(value + ' VALUE');
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
        showValue:'value--show',
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
       target255075100, value, displayValue, numberState:true, operandState:true, dupliNumMesasage: '',
       dupliNumInRowMesasage: '',
       operandMessage:'',
       showValue:'value--hide',
       disabledButt1:false,
       disabledButt2:false,
       disabledButt3:false,
       disabledButt4:false,
       disabledButt5:false,
       disabledButt6:false,
       disabledButtClass1:'button-detaljnije',
       disabledButtClass2:'button-detaljnije',
       disabledButtClass3:'button-detaljnije',
       disabledButtClass4:'button-detaljnije',
       disabledButtClass5:'button-detaljnije',
       disabledButtClass6:'button-detaljnije',
      
       score: {
        win: win,
        loss: loss,
        message: ''
      },
    });
  }

  DeleteInputs=()=>{
          let buttonIndexArr=this.state.buttonIndexArr.slice();
          let buttonIndex=buttonIndexArr.slice(0,buttonIndexArr.length-1);
             console.log(buttonIndex+' button index');

          let { displayValue}=this.state;
          let displayValueLength = displayValue.length;
          displayValue=  displayValue.slice(0,displayValueLength-1);

        this.setState({
             displayValue: displayValue,
            //  disabledButt1:false,
            //  disabledButtClass1:'button-detaljnije',
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

        <button className={this.state.disabledButtClass1} disabled={this.state.disabledButt1} onClick={() => this.PerformNumberInput(target1a,1,false)}>{target1a}</button>
        <button className={this.state.disabledButtClass2} disabled={this.state.disabledButt2} onClick={() => this.PerformNumberInput(target1b,2,false)}>{target1b}</button>
        <button className={this.state.disabledButtClass3} disabled={this.state.disabledButt3} onClick={() => this.PerformNumberInput(target1c,3,false)}>{target1c}</button>
        <button className={this.state.disabledButtClass4} disabled={this.state.disabledButt4} onClick={() => this.PerformNumberInput(target1d,4,false)}>{target1d}</button>
        <button className={this.state.disabledButtClass5} disabled={this.state.disabledButt5} onClick={() => this.PerformNumberInput(target101520,5,false)}>{target101520}</button>
        <button className={this.state.disabledButtClass6} disabled={this.state.disabledButt6} onClick={() => this.PerformNumberInput(target255075100,6,false)}>{target255075100}</button>
        <br></br>
        <button className='button-detaljnije' value={'+'} onClick={() => this.PerformOperandInput('+',7,false)}>+</button>
        <button className='button-detaljnije' value={'-'} onClick={() => this.PerformOperandInput('-',8,false)}>-</button>
        <button className='button-detaljnije' value={'*'} onClick={() => this.PerformOperandInput('*',9,false)}>*</button>
        <button className='button-detaljnije' value={'/'} onClick={() => this.PerformOperandInput('/',10,false)}>/</button>
        <button className='button-detaljnije' value={'('} onClick={() => this.PerformOperandInput('(',11,false)}>(</button>
        <button className='button-detaljnije' value={')'} onClick={() => this.PerformOperandInput(')',12,false)}>)</button>
        <div>

          <h2>PLAYERS INPUT: {this.state.dupliNumMesasage} {this.state.dupliNumInRowMesasage} {this.state.operandMessage}</h2> 
          <button className='button-detaljnije' onClick={this.DeleteInputs}>OBRISI</button>

          <h2>{this.state.displayValue} -DISPLAY VALUE</h2>
          <h2 className={this.state.showValue}>VASE RESENJE JE: {this.state.value}-VALUE</h2>
          <br></br>
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