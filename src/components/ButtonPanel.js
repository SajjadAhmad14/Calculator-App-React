import React, { Component } from 'react';
import Button from './Button'
export default class ButtonPanel extends Component {

  render() {
    return <div>
    <Button
      zero =  {'0'}
      one =  {'1'}
      two =  {'2'}
      three =  {'3'}
      four =  {'4'}
      five =  {'5'}
      six =  {'6'}
      seven =  {'7'}
      eigth =  {'8'}
      nine =  {'9'}
      add =  {'+'}
      substract =  {'-'}
      multiply =  {'X'}
      devide =  {'/'}
      modulo =  {'%'}
      equal  =  {'='}
      extra =  {'AC'}
      extra2 =  {'+/-'}
      point = {'.'}
      c = {'C'}
    />
    </div>
  }
}