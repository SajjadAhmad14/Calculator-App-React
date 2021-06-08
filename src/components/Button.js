import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ name, buttonClass, clickHandler }) => {
  const handleClick = () => {
    clickHandler(name);
  };

  return (
    <button type="button" className={buttonClass} onClick={handleClick}>
      {name}
    </button>
  );
};
Button.propTypes = {
  name: PropTypes.string.isRequired,
  buttonClass: PropTypes.string.isRequired,
};

Button.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default Button;
