import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'react-dropdown-tree-select/dist/styles.css'
import DropdownTreeSelect from 'react-dropdown-tree-select';
import bigData from './big-data.json'

class App extends Component {
  constructor() {
    super();
    this.state = { showPartial: false }
  }

  render() {
    const onChange = (curNode, selectedNodes) => {
      console.log('onChange::', curNode, selectedNodes)
    }

    const changePartial = () => {
      this.setState({ showPartial: !this.state.showPartial });
    }

    return (
      <div className="App">
        <input type='checkbox' onChange={ changePartial } /> Show Partially Selected
        <DropdownTreeSelect showPartiallySelected = {this.state.showPartial} data={bigData} onChange={onChange} />
      </div>
    );
  }
}

export default App;
