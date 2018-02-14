import React, { Component } from 'react';

class Sum extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numberOne: '',
      numberTwo: '',
      sum: null
    }
  }

  updateNumberOne = e => {
    this.setState({
      numberOne: e.target.value
    })
  }

  updateNumberTwo = e => {
    this.setState({
      numberTwo: e.target.value
    })
  }

  sum = (first, second) => {
    const total = Number(first) + Number(second);
    this.setState({
      sum: total
    })
  }

  render() {
    return (
      <div className="puzzleBox sumPB">
        <h4>Sum</h4>
        <input className="inputLine" type="number" value={ this.state.numberOne } onChange={ this.updateNumberOne }/>
        <input className="inputLine" type="number" value={ this.state.numberTwo } onChange={ this.updateNumberTwo }/>
        <button className="confirmationButton" onClick={ () => this.sum(this.state.numberOne, this.state.numberTwo) }>Calculate</button>
        <span className="resultsBox">Total: { this.state.sum }</span>
      </div>
    );
  }
}

export default Sum;