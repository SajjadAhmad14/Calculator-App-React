import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Display extends Component {
  render() {
    return <div className = 'display-board'>
    <h1 className = 'result'>{this.props.result }</h1>
    </div>
  }
}

  Display.propTypes = { 
    result: PropTypes.string 
  }

  Display.defaultProps = {
    result: 0,
  }