import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const ButtonPanel = ({ clickHandler }) => {
  const handleClick = (name) => {
    clickHandler(name);
  };
  return (
    <div className="btn-panel">
      <div className="group-1">
        <Button name="AC" buttonClass="rolling-stone btn-shape btn-spacing" clickHandler={handleClick} />
        <Button name="+/-" buttonClass="rolling-stone btn-shape btn-spacing digit-width" clickHandler={handleClick} />
        <Button name="%" buttonClass="rolling-stone btn-shape btn-spacing digit-width" clickHandler={handleClick} />
        <Button name="/" buttonClass="radical-red btn-shape btn-spacing btn-width" clickHandler={handleClick} />
      </div>
      <div className="group-2">
        <Button name="7" buttonClass="night-rider btn-shape btn-spacing btn-width digit-width" clickHandler={handleClick} />
        <Button name="8" buttonClass="night-rider btn-shape btn-spacing btn-width digit-width" clickHandler={handleClick} />
        <Button name="9" buttonClass="night-rider btn-shape btn-spacing btn-width digit-width" clickHandler={handleClick} />
        <Button name="X" buttonClass="radical-red btn-shape btn-spacing btn-width" clickHandler={handleClick} />
      </div>
      <div className="group-3">
        <Button name="4" buttonClass="night-rider btn-shape btn-spacing btn-width digit-width" clickHandler={handleClick} />
        <Button name="5" buttonClass="night-rider btn-shape btn-spacing btn-width digit-width" clickHandler={handleClick} />
        <Button name="6" buttonClass="night-rider btn-shape btn-spacing btn-width digit-width" clickHandler={handleClick} />
        <Button name="-" buttonClass="radical-red btn-shape btn-spacing btn-width" clickHandler={handleClick} />
      </div>
      <div className="group-4">
        <Button name="1" buttonClass="night-rider btn-shape btn-spacing btn-width digit-width" clickHandler={handleClick} />
        <Button name="2" buttonClass="night-rider btn-shape btn-spacing btn-width digit-width" clickHandler={handleClick} />
        <Button name="3" buttonClass="night-rider btn-shape btn-spacing btn-width digit-width" clickHandler={handleClick} />
        <Button name="+" buttonClass="night-rider btn-shape btn-spacing btn-width digit-width" clickHandler={handleClick} />
      </div>
      <div className="group-5">
        <Button name="0" buttonClass="night-rider btn-shape btn-spacing btn-width digit-width" clickHandler={handleClick} />
        <Button name="." buttonClass="night-rider btn-shape btn-spacing btn-width digit-width" clickHandler={handleClick} />
        <Button name="C" buttonClass="night-rider btn-shape btn-spacing btn-width digit-width" clickHandler={handleClick} />
        <Button name="=" buttonClass="radical-red btn-shape btn-spacing btn-width yello" clickHandler={handleClick} />
      </div>
    </div>
  );
};

export default ButtonPanel;

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};
