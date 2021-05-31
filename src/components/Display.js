import React, { Component } from 'react';
import PropTypes from 'prop-types';
export default class Display extends Component {
  render() {
    return <h1>{this.props.result }</h1>
    }
  }
  Display.propTypes = { result: PropTypes.string }

  Display.defaultProps = {
    result: 0,
  }