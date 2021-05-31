import React, { Component } from 'react';

export default class ButtonPanel extends Component {
  render() {
    return <div className='btn-panel'>
      <div className = 'group-1'>
        <button className='rolling-stone btn-shape btn-spacing'>mrc</button>
        <button className='rolling-stone btn-shape btn-spacing'>m-</button>
        <button className='rolling-stone btn-shape btn-spacing'>m+</button>
        <button className='radical-red btn-shape btn-spacing btn-width'>/</button>
      </div>
      <div className = 'group-2'>
        <button className='night-rider btn-shape btn-spacing btn-width digit-width'>7</button>
        <button className='night-rider btn-shape btn-spacing btn-width digit-width'>8</button>
        <button className='night-rider btn-shape btn-spacing btn-width digit-width'>9</button>
        <button className='radical-red btn-shape btn-spacing btn-width '>*</button>
      </div>
      <div className = 'group-3'>
        <button className='night-rider btn-shape btn-spacing btn-width digit-width'>4</button>
        <button className='night-rider btn-shape btn-spacing btn-width digit-width'>5</button>
        <button className='night-rider btn-shape btn-spacing btn-width digit-width'>6</button>
        <button className='radical-red btn-shape btn-spacing btn-width'>-</button>
      </div>
      <div className = 'group-4'>
        <button className='night-rider btn-shape btn-spacing btn-width digit-width'>1</button>
        <button className='night-rider btn-shape btn-spacing btn-width digit-width'>2</button>
        <button className='night-rider btn-shape btn-spacing btn-width digit-width'>3</button>
        <button className='radical-red btn-shape btn-spacing btn-width'>+</button>
      </div>
      <div className = 'group-5'>
        <button className='night-rider btn-shape btn-spacing btn-width digit-width'>0</button>
        <button className='night-rider btn-shape btn-spacing btn-width digit-width'>.</button>
        <button className='night-rider btn-shape btn-spacing btn-width digit-width'>C</button>
        <button className='radical-red btn-shape btn-spacing btn-width yello'>=</button>
      </div>
    </div>
  }
}