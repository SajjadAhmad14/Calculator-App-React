import React from 'react';

const Quote = require('inspirational-quotes');

const Qoutes = () => (
  <div className="qoutesContainer">
    <p className="qoutes">{Quote.getRandomQuote()}</p>
  </div>
);

export default Qoutes;
