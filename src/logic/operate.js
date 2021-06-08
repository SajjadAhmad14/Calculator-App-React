import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  let result = 0;
  switch (operation) {
    case '-':
      result = Big(numberOne - numberTwo);
      break;
    case '+':
      result = Big(Number(numberOne) + Number(numberTwo));
      break;
    case 'X':
      result = Big(numberOne * numberTwo);
      break;
    case '/':
      result = Big(numberOne / numberTwo);
      break;
    case '%':
      result = Big(Number(numberOne) % Number(numberTwo));
      break;
    default:
      result = Big(0);
  }
  return result;
};

export default operate;
