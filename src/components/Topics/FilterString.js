import React, { Component } from 'react';

class FilterString extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: '',
      unfilteredStrings: ['happy birthday', 'merry christmas', 'happy thanksgiving', 'happy holidays', 'balloons', 'party', 'cake', 'thank you', 'jiminy christmas'],
      filteredStrings: []
    }
  }

  handleInput = e => {
    this.setState({
      userInput: e.target.value
    })
  }

  filterStrings = text => {
    const strings = this.state.unfilteredStrings;
    const filtered = [];
    for ( let x = 0; x < strings.length; x++ ) {
      strings[x].includes(text) ?
        filtered.push(strings[x]) :
        console.log('does not include')
    }
    this.setState({
      filteredStrings: filtered,
      userInput: ''
    })
  }

  render() {
    return (
      <div className="puzzleBox filterStringPB">
        <h4>FilterString</h4>
        <span className="puzzleText">{ JSON.stringify(this.state.unfilteredStrings, null, 10) }</span>
        <input className="inputLine" onChange={ this.handleInput } value={ this.state.userInput }/>
        <button className="confirmationButton" onClick={ () => this.filterStrings(this.state.userInput) }>Filter</button>
        <span className="resultsBox filterStringRB">{ JSON.stringify(this.state.filteredStrings, null, 10) }</span>
      </div>
    );
  }
}

export default FilterString;