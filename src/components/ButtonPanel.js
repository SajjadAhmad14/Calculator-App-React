import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const ButtonPanel = ({ clickHandler }) => {
  const handleClick = (name) => {
    clickHandler(name);
  };
  return (
    <div className="btn-panel">
      <div className="group">
        <Button name="AC" buttonClass="btn-width" clickHandler={handleClick} />
        <Button name="+/-" buttonClass="btn-width" clickHandler={handleClick} />
        <Button name="%" buttonClass="btn-width" clickHandler={handleClick} />
        <Button name="/" buttonClass="btn-width orange" clickHandler={handleClick} />
      </div>
      <div className="group">
        <Button name="7" buttonClass="btn-width" clickHandler={handleClick} />
        <Button name="8" buttonClass="btn-width" clickHandler={handleClick} />
        <Button name="9" buttonClass="btn-width" clickHandler={handleClick} />
        <Button name="X" buttonClass="btn-width orange" clickHandler={handleClick} />
      </div>
      <div className="group">
        <Button name="4" buttonClass="btn-width" clickHandler={handleClick} />
        <Button name="5" buttonClass="btn-width" clickHandler={handleClick} />
        <Button name="6" buttonClass="btn-width" clickHandler={handleClick} />
        <Button name="-" buttonClass="btn-width orange" clickHandler={handleClick} />
      </div>
      <div className="group">
        <Button name="1" buttonClass="btn-width" clickHandler={handleClick} />
        <Button name="2" buttonClass="btn-width" clickHandler={handleClick} />
        <Button name="3" buttonClass="btn-width" clickHandler={handleClick} />
        <Button name="+" buttonClass="btn-width orange" clickHandler={handleClick} />
      </div>
      <div className="group">
        <Button name="0" buttonClass="width-50" clickHandler={handleClick} />
        <Button name="." buttonClass="btn-width" clickHandler={handleClick} />
        <Button name="=" buttonClass="btn-width orange" clickHandler={handleClick} />
      </div>
    </div>
  );
};

export default ButtonPanel;

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};
