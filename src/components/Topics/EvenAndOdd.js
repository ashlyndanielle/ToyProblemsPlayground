import React, { Component } from 'react';

class EvenAndOdd extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userInput: '',
      evens: [],
      odds: []
    }
  }

  sortArray = input => {
    const splitInput = input.split(',');
    const evens = [];
    const odds = [];

    for ( let x = 0; x < splitInput.length; x++ ) {
      splitInput[x]%2 === 0 ? 
        evens.push( parseInt(splitInput[x], 10)) :
        odds.push( parseInt(splitInput[x], 10))
    }

    this.setState({
      userInput: '',
      evens,
      odds
    })
  }

  handleInput = e => {
    this.setState({
      userInput: e.target.value
    })
  }

  render() {
    return (
      <div className="puzzleBox evenAndOddPB">
        <h4>Even and Odd</h4>
        <input
          className="inputLine"
          onChange={ this.handleInput }
          value={ this.state.input }
        />
        <button className="confirmationButton" onClick={ input => this.sortArray(this.state.userInput) }>Sort Array</button>
        <span className="resultsBox">Evens: { JSON.stringify(this.state.evens) }</span>
        <span className="resultsBox">Odds: { JSON.stringify(this.state.odds) }</span>
      </div>
    );
  }
}

export default EvenAndOdd;