import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  switch (operation) {
    case '-':
      Big(numberOne - numberTwo);
      break;
    case '+':
      Big(numberOne + numberTwo);
      break;
    case 'X':
      Big(numberOne * numberTwo);
      break;
    case '/':
      Big(numberOne / numberTwo);
      break;
    case '%':
      Big(numberOne % numberTwo);
      break;
    default:
      0;
  }
};

export default operate;