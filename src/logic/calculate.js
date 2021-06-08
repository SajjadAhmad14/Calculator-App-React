import operate from './operate';

const calculate = (data, buttonName) => {
  const { total, next, operation } = data;
  const modifiedData = data;
  const nums = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  if (nums.includes(buttonName)) {
    if (!total || total === '0') {
      modifiedData.total = buttonName;
    }
    if (total && total !== '0' && !next && !operation) {
      modifiedData.total += buttonName;
      if (buttonName === '0' && total === '0') modifiedData.total = total;
    }
    if (total && operation && (!next || next === '0')) {
      modifiedData.next = buttonName;
    }
    if (total && next && operation && next !== '0') {
      modifiedData.next += buttonName;
    }
  }

  if (buttonName === '+/-') {
    if (total && !next) {
      modifiedData.total = operate(total, -1, 'X');
    }
    if (next) {
      modifiedData.next = operate(next, -1, 'X');
    }
  }

  if (buttonName === '.') {
    if (!total && !next) {
      modifiedData.total = '0.';
    }
    if (total && !next && total.indexOf('.') === -1) {
      modifiedData.total = `${total}.`;
    }
    if (next && next.indexOf('.') === -1) {
      modifiedData.next = `${next}.`;
    }
  }

  if (buttonName === 'AC') {
    modifiedData.total = undefined;
    modifiedData.next = undefined;
    modifiedData.operation = undefined;
  }

  if (['+', 'X', '-', '/', '=', '%'].includes(buttonName)) {
    modifiedData.operation = buttonName === '=' ? undefined : buttonName;
    if (total && next && operation) {
      modifiedData.total = operate(total, next, operation);
      modifiedData.next = undefined;
    }
    if (total && !next) {
      modifiedData.operation = buttonName;
    }
  }

  return modifiedData;
};

export default calculate;
