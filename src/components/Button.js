import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ name }) => (
  <button type="button" className="buttonClass">
    {name}
  </button>
);

Button.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Button;
