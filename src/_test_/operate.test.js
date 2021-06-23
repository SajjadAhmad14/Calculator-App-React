import '@testing-library/jest-dom/extend-expect';
import operate from '../logic/operate';

describe('Test operate method', () => {
  it('Add two numbers', () => {
    const result = operate(5, 10, '+');
    expect(Number(result)).toEqual(15);
  });

  it('Substract two numbers', () => {
    const result = operate(5, 10, '-');
    expect(Number(result)).toBe(-5);
  });

  it('Multiply two numbers', () => {
    const result = operate(5, 10, 'X');
    expect(Number(result)).toBe(50);
  });

  it('Divide two numbers', () => {
    const result = operate(50, 10, '/');
    expect(Number(result)).toBe(5);
  });

  it('Apply modulo operator on two numbers', () => {
    const result = operate(51, 10, '%');
    expect(Number(result)).toBe(1);
  });
});
