import React from 'react';
import ReactDOM from 'react-dom';
import "./css/styles.css";


class Calculator extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      number1: 0,
      number2: 0,
      sum: 0
    }
  }

  add         = () => this.setState({sum:this.state.number1 + this.state.number2})
  subtraction = () => this.setState({sum:this.state.number1 - this.state.number2})
  product     = () => this.setState({sum:this.state.number1 * this.state.number2})
  division    = () => this.setState({sum:this.state.number1 / this.state.number2})


  getNumber1 = (event) => this.setState({number1:Number(event.target.value)})
  getNumber2 = (event) => this.setState({number2:Number(event.target.value)})

  render(){
    return (
      <div id="mainBox">
        <h1>Calculator</h1>
        <div id="inputId">
          <input onKeyUp={this.getNumber1} placeholder="enter number"/>
          <input onKeyUp={this.getNumber2}  placeholder="enter number"/>
          <input placeholder="result" value={this.state.sum}/>
        </div>
        <div id='buttonId'>
          <button onClick={this.add}>Add</button>
          <button onClick={this.subtraction}>Subtraction</button>
          <button onClick={this.product}>Product</button>
          <button onClick={this.division}>Dividion</button>
        </div>
    </div>
    )
  }

}

export default Calculator;
