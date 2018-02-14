import React, { Component } from 'react';

class FilterObject extends Component {
  constructor(props) {
    super(props);

    this.state = {
      unfilteredArray: [
        { name: 'Ashlyn', age: 26, job: 'Developer' }, 
        { name: 'Gus', job: 'Developer', color: 'blue' }, 
        { name: 'Shelby', personality: 'silly', color: 'pink' }, 
        { name: 'Christian', age: 32, kids: 15, personality: 'boring' }, 
        { name: 'Betsy', color: 'red', personality: 'happy' }
      ],
      userInput: '',
      filteredArray: []
    }
  }

  handleInput = e => {
    this.setState({
      userInput: e.target.value
    })
  }

  filterForProperties = prop => {
    console.log('prop: ', prop)
    const unfiltered = this.state.unfilteredArray;
    var filtered = [];
    for ( let x = 0; x < unfiltered.length; x++ ) {
      unfiltered[x].hasOwnProperty(prop) ?
        filtered.push(unfiltered[x]) :
        console.log('none')
    }
    this.setState({
      filteredArray: filtered,
      userInput: ''
    })

  }
  render() {
    return (
      <div className="puzzleBox filterObjectPB">
        <h4>FilterObject</h4>
        <span className="puzzleText">{ JSON.stringify(this.state.unfilteredArray, null, 10) }</span>
        <input className="inputLine" value={ this.state.userInput } onChange={ this.handleInput }/>
        <button className="confirmationButton" onClick={ () => this.filterForProperties(this.state.userInput) }>Filter</button>
        <span className="resultsBox filterObjectRB">{ JSON.stringify(this.state.filteredArray, null, 10) }</span>
      </div>
    );
  }
}

export default FilterObject;