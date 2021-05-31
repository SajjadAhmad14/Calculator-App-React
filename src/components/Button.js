import React, { Component } from 'react'
import propTypes from 'prop-types'

class Button extends Component {
  render() {
    return <h1>This is {this.props.name}</h1>
  }
}

Button.propTypes = {
  name: PropTypes.string
}