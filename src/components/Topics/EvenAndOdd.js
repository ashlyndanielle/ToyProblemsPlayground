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
    const parsedArray = [];
    const evens = [];
    const odds = [];
    input.split(',').forEach( num => {
      parsedArray.push(parseInt(num, 10));
    });
    parsedArray.forEach( num => {
      num%2 === 0 ? evens.push(num + ', ') : odds.push(num + ', ');
    })
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
        <span className="resultsBox">Evens: { this.state.evens }</span>
        <span className="resultsBox">Odds: { this.state.odds }</span>
      </div>
    );
  }
}

export default EvenAndOdd;