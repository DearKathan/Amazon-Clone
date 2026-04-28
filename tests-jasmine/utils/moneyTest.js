import {formatCurrency} from '../../scripts/utils/money.js';


describe('Test Suite: formatCurrency', () => {
  it('Converts Cents into Dollars', () => {
    expect(formatCurrency(2095)).toEqual('20.95');
  });

  it('Works with 0', () => {
    expect(formatCurrency(0)).toEqual('0.00');
  });

  it('Rounding up to the nearest cent', () => {
    expect(formatCurrency(2000.5)).toEqual('20.01');
  });

  it('Rounding down to the nearest cent', () => {
    expect(formatCurrency(2000.4)).toEqual('20.00');
  });

  it('Working with negative numbers', () => {
    expect(formatCurrency(-25.5)).toEqual('-0.25');
  });
});