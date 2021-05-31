import React, { Component } from 'react'
import PropTypes from 'prop-types'
export default class Button extends Component {
  render() {
    const { zero, one, two, three, four, five, six, seven, eigth, nine, add, substract,
      multiply, devide, modulo, equal, extra, extra2, point, c } = this.props
    return <div className='btn-panel'>
      <div className='group-1'>
        <button className='rolling-stone btn-shape btn-spacing'>{extra}</button>
        <button className='rolling-stone btn-shape btn-spacing digit-width'>{extra2}</button>
        <button className='rolling-stone btn-shape btn-spacing digit-width'>{modulo}</button>
        <button className='radical-red btn-shape btn-spacing btn-width'>{devide}</button>
      </div>
      <div className='group-2'>
        <button className='night-rider btn-shape btn-spacing btn-width digit-width'>{seven}</button>
        <button className='night-rider btn-shape btn-spacing btn-width digit-width'>{eigth}</button>
        <button className='night-rider btn-shape btn-spacing btn-width digit-width'>{nine}</button>
        <button className='radical-red btn-shape btn-spacing btn-width '>{multiply}</button>
      </div>
      <div className='group-3'>
        <button className='night-rider btn-shape btn-spacing btn-width digit-width'>{four}</button>
        <button className='night-rider btn-shape btn-spacing btn-width digit-width'>{five}</button>
        <button className='night-rider btn-shape btn-spacing btn-width digit-width'>{six}</button>
        <button className='radical-red btn-shape btn-spacing btn-width'>{substract}</button>
      </div>
      <div className='group-4'>
        <button className='night-rider btn-shape btn-spacing btn-width digit-width'>{one}</button>
        <button className='night-rider btn-shape btn-spacing btn-width digit-width'>{two}</button>
        <button className='night-rider btn-shape btn-spacing btn-width digit-width'>{three}</button>
        <button className='radical-red btn-shape btn-spacing btn-width'>{add}</button>
      </div>
      <div className='group-5'>
        <button className='night-rider btn-shape btn-spacing btn-width digit-width'>{zero}</button>
        <button className='night-rider btn-shape btn-spacing btn-width digit-width'>{point}</button>
        <button className='night-rider btn-shape btn-spacing btn-width digit-width'>{c}</button>
        <button className='radical-red btn-shape btn-spacing btn-width yello'>{equal}</button>
      </div>
    </div>
  }
}

Button.propTypes = {
  add: PropTypes.string,
  substract: PropTypes.string,
  multiply: PropTypes.string,
  devide: PropTypes.string,
  modulo: PropTypes.string,
  one: PropTypes.string,
  two: PropTypes.string,
  three: PropTypes.string,
  four: PropTypes.string,
  five: PropTypes.string,
  six: PropTypes.string,
  seven: PropTypes.string,
  eigth: PropTypes.string,
  nine: PropTypes.string,
  zero: PropTypes.string,
  extra: PropTypes.string,
  extra2: PropTypes.string,
  c: PropTypes.string
}