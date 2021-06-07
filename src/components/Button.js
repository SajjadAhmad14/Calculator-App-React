import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ name, buttonClass }) => (
  <button type="button" className={buttonClass}>
    {name}
  </button>
);

Button.propTypes = {
  name: PropTypes.string.isRequired,
  buttonClass: PropTypes.string.isRequired,
};

export default Button;
