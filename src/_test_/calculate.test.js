import '@testing-library/jest-dom/extend-expect';
import calculate from '../logic/calculate';

describe('Test calculate method', () => {

  it('Return data object with total property value 0', () => {
    const buttonName = '0';
    expect(calculate({total: '0', next: '0', operation: ''}, buttonName)).toBeTruthy();
  });

  it('Return data object with total property value 0', () => {
    const buttonName = '0';
    expect(calculate({total: '0', next: '0', operation: ''}, buttonName)).toEqual({total: '0', next: '0', operation: ''});
  });

  it('Return data object with total property value 1', () => {
    const buttonName = '1';
    expect(calculate({total: '1', next: '0', operation: ''}, buttonName)).toBeTruthy()
  });

  it('Return data object with total property value 1', () => {
    const buttonName = '1';
    expect(calculate({total: '1', next: '0', operation: ''}, buttonName)).toEqual({total: '1', next: '0', operation: ''});
  });

  it('Do not return data object with total property value 1', () => {
    const buttonName = '1';
    expect(calculate({total: '0', next: '0', operation: ''}, buttonName)).toBeTruthy()
  });

  it('Return data object with next property value 0', () => {
    const buttonName = '0';
    expect(calculate({total: '0', next: '0', operation: ''}, buttonName)).toBeTruthy();
  });

  it('Return data object with next property value 0', () => {
    const buttonName = '0';
    expect(calculate({total: '0', next: '0', operation: ''}, buttonName)).toEqual({total: '0', next: '0', operation: ''});
  });

})
