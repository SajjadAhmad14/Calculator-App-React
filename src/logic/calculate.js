import operate from './operate'; // eslint-disable-line

const calculate = (data, buttonName) => {
  let { total, next, operation } = data;
  operation = buttonName;
  switch (buttonName) {
    case 'AC':
      total = 0;
      break;
    case '+/-':
      total *= -1;
      next *= -1;
      break;
    case '+':
      total += next;
      break;
    case '-':
      total -= next;
      break;
    case '*':
      total *= next;
      break;
    case '/':
      total /= next;
      break;
    case '%':
      total %= next;
      break;
    default:
      total = 0;
  }
  return { total, next, operation };
};

export default calculate;
