import React, { Component } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(buttonName) {
    const data = { total: null, next: null, operation: null };
    const { total, next, operation } = calculate(data, buttonName);
    this.setState({ total, next, operation });
  }

  render() {
    return (
      <div className="main-app">
        <Display result ={this.state.total} />
        <ButtonPanel onClick={this.handleClick} />
        {/* <calculate /> */}
      </div>
    );
  }
}

export default App;
