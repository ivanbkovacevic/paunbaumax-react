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
    playerInput:
    {
      input: null,
      inputArr: [],
      displayInputOperands: [],
      displayInputAll: [],
      calculation: null,
      NumOperSwitch: true,
      calculation: null,
    },
   
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
    let targetNumber = Math.floor(Math.random() * (max1 - min1 + 1)) + min1;
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
  AddNumber = (digit) => {
 
    let NumOperSwitch = this.state.playerInput.NumOperSwitch;
    let inputArr = this.state.playerInput.inputArr.slice();
    let displayInputOperands = this.state.playerInput.displayInputOperands.slice();
    let displayInputAll = this.state.playerInput.displayInputAll.slice();
    let dupliNum = inputArr.indexOf(digit);
    let calculation = this.state.playerInput.calculation;
    console.log(inputArr + '--------------------');
    console.log(dupliNum + ' dupliNum')
    console.log(calculation + ' calcAddNumb')
    console.log(NumOperSwitch + ' NumOperSwitch')

    if (NumOperSwitch) {
      if (dupliNum === -1) {
        inputArr.push(digit);
        displayInputAll.push(digit);
        calculation+=digit,
        this.setState({
          playerInput:
          {
            input: digit,
            inputArr: inputArr,
            displayInputOperands: displayInputOperands,
            displayInputAll: displayInputAll,
            calculation,
            NumOperSwitch: false
          },
          dupliNumMesasage: 'ok je',
          dupliNumInRowMesasage:''
        });
      } else {
        calculation+=digit,
        this.setState({
          playerInput:
          {
            input: digit,
            inputArr: inputArr,
            displayInputOperands: displayInputOperands,
            displayInputAll: displayInputAll,
           calculation,
            NumOperSwitch: true
          },
          dupliNumInRowMesasage:'Ne moze isti broj 2x '

        });
       
      }

    } else {
      
      this.setState({
        playerInput:
        {
          input: digit,
          inputArr: inputArr,
          displayInputOperands: displayInputOperands,
          displayInputAll: displayInputAll,
          NumOperSwitch: false,
          calculation
        },
        dupliNumMesasage:'Morate operaciju da ukucate pa tek onda naredni broj '
        
      });
    }
    console.log(this.state.dupliNumMesasage+' dupliNUMmessage')
    console.log(calculation+' CALCULATION  NUM')
   
  }

  AddOperation = (operand) => {
    let calculation = this.state.playerInput.calculation;
    let input = this.state.input;
    let inputArr = this.state.playerInput.inputArr.slice();
    let displayInputOperands = this.state.playerInput.displayInputOperands.slice();
    let displayInputAll = this.state.playerInput.displayInputAll.slice();


    calculation += operand,
    displayInputOperands.push(operand);
    displayInputAll.push(operand);
    this.setState({
      playerInput:
      {
        input: operand,
        inputArr: inputArr,
        displayInputOperands: displayInputOperands,
        displayInputAll: displayInputAll,
        calculation,
        NumOperSwitch: true
      }
    });

    console.log(displayInputOperands);
    console.log(calculation+' CALCULATION  OPERAND')
  }

  CalculationTest=(input)=>{
    let calculationFinal;
    calculationFinal
    switch (input) {
      case '+':
        calculationFinal= (calculationFinal+input);
          break;
      case '-':
        calculationFinal= (calculationFinal-input);
          break;
      case '*':
        calculationFinal= (calculationFinal*input);
          break;
  }
  console.log(calculationFinal)
  this.setState({
    playerInput:
    {
      input: input,
      
      calculation:calculationFinal,
      NumOperSwitch: true
    }
  });
}

  Calculate = () => {
    let calculation = this.state.playerInput.displayInputAll.slice();
    let calculationFinal;
    for(let i in calculation){
      if(isNaN(Number(calculation[i]))){
        console.log(calculation[i])

      }else{

      }
     
    }
    // let calculationExtract = calculation.slice();
    //   calculationExtract= calculationExtract.splice(0,1);
    //  let calculationFull='';
    //   calculationFull+=calculationExtract; 

    //  console.log(calculationExtract+'T');
    //  console.log(calculationFull+'T');

    // calculation=calculation.toString();
    //  calculation=calculation.replace(/,/g, " ");
    //  calculation=eval(calculation);
         // let calculation = this.state.playerInput.calculation;
    //calculation +='';
    console.log(typeof(calculation) +calculation +' calculation')
    let win = this.state.score.win;
    let loss = this.state.score.loss;
    let message = this.state.score.message;
    if (this.state.targetNumber == calculation) {

      this.setState({
        score: {
          win: win + 1,
          loss: loss,
          message: message + 'BRAVO! TACNO RESENJE'
        }, playerInput: {
         
        }
      });
      console.log('BRAVO');
    } else {
      this.setState({
        score: {
          win: win,
          loss: loss + 1,
          message: message + ' :( NIJE TACNO RESENJE'
        }, playerInput: {
         
        }
      });
      console.log('NIJE TACNO')
    }
    console.log(calculation);
    console.log(this.state.score.win);
    console.log(this.state.score.loss);
    this.setState({ calculation })
  }

  ClearAll = () => {
    let { targetNumber, target1a, target1b, target1c, target1d, target101520, target255075100, calculation } = this.state;
    targetNumber = target1a = target1b = target1c = target1d = target101520 = target255075100 = calculation = 0;
    let win = this.state.score.win;
    let loss = this.state.score.loss;
    console.log(targetNumber, target1a, target1b, target1c, target1d, target101520, target255075100)
    this.setState({
      playerInput:
      {
        input: null,
        inputArr: [],
        displayInputOperands: [],
        displayInputAll: [],
        NumOperSwitch:true,
        calculation:null
      }, targetNumber, target1a, target1b, target1c, target1d, target101520, target255075100, calculation
      , score: {
        win: win,
        loss: loss,
        message: ''
      },
    });
  }


  render() {
    let { targetNumber, target1a, target1b, target1c, target1d, target101520, target255075100 } = this.state;
    return (
      <div>
        <p>f</p>
        <p>f</p>
        <p>f</p>
        <Score win={this.state.score.win} loss={this.state.score.loss} message={this.state.score.message} />

        <button className='button-detaljnije' onClick={this.generateTarget}>IZABERI BROJ</button>
        <button className='button-detaljnije' onClick={this.generateSolution}>POGLEDAJ  RESENJE</button>
        <h2>PRONADJI BROJ-- {this.state.targetNumber}</h2>
        <h3>UZ POMOC BROJEVA : [{this.state.target1a}] [{this.state.target1b}]
          [{this.state.target1c}] [{this.state.target1d}] --- [{this.state.target101520}] --- [{this.state.target255075100}]
          </h3>

        <button className='button-detaljnije Broj' onClick={() => this.AddNumber(target1a)}>{target1a}</button>
        <button className='button-detaljnije' value={target1b} onClick={() => this.AddNumber(target1b)}>{target1b}</button>
        <button className='button-detaljnije' value={target1c} onClick={() => this.AddNumber(target1c)}>{target1c}</button>
        <button className='button-detaljnije' value={target1d} onClick={() => this.AddNumber(target1d)}>{target1d}</button>
        <button className='button-detaljnije' value={target101520} onClick={() => this.AddNumber(target101520)}>{target101520}</button>
        <button className='button-detaljnije' value={target255075100} onClick={() => this.AddNumber(target255075100)}>{target255075100}</button>
        <br></br>
        <button className='button-detaljnije' value={'+'} onClick={() => this.AddOperation('+')}>+</button>
        <button className='button-detaljnije' value={'-'} onClick={() => this.AddOperation('-')}>-</button>
        <button className='button-detaljnije' value={'*'} onClick={() => this.AddOperation('*')}>*</button>
        <button className='button-detaljnije' value={'/'} onClick={() => this.AddOperation('/')}>/</button>
        <button className='button-detaljnije' value={'('} onClick={() => this.AddOperation('(')}>(</button>
        <button className='button-detaljnije' value={')'} onClick={() => this.AddOperation(')')}>)</button>
        <div>
          <h2>PLAYERS INPUT</h2>
          <h2>KLIKNULI STE NA: {this.state.playerInput.input} {this.state.dupliNumMesasage} {this.state.dupliNumInRowMesasage}</h2>
          <h2>{this.state.playerInput.displayInputAll}</h2>
          <h2>VASE RESENJE JE: {this.state.calculation}</h2>
          <button className='button-detaljnije' onClick={this.Calculate}>IZRACUNAJ</button>
          <button className='button-detaljnije' onClick={this.ClearAll}>RESETUJ SVE</button>
          <button className='button-detaljnije' onClick={this.DisplayAll}>PRIKAZI SVE</button>
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