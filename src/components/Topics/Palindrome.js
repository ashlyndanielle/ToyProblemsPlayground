import React, { Component } from 'react';

class Palindrome extends Component {
  constructor(props) {
    super(props);
    this.state={
      userInput: '',
      palindrome: ''
    }
  }

  handleInput = e => {
    this.setState({
      userInput: e.target.value
    })
  }

  checkPalindrome = word => {
    let result = '';
    const reversed = word.split('').reverse().join('');
    word === reversed ? result = 'true' : result = 'false'
    this.setState({
      palindrome: result
    })
  }

  render() {
    return (
      <div className="puzzleBox palindromePB">
        <h4>Palindrome</h4>
        <input className="inputLine" value={ this.state.userInput } onChange={ this.handleInput }/>
        <button className="confirmationButton" onClick={ () => this.checkPalindrome(this.state.userInput) }>Reveal</button>
        <span className="resultsBox">Palindrome: { this.state.palindrome }</span>
      </div>
    );
  }
}

export default Palindrome;