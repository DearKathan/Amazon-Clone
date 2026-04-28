import {formatCurrency} from '../../scripts/utils/money.js';

console.log('Test Suite : formatCurrency');

console.log('Converts Cents into dollars');

if(formatCurrency(2095) === '20.95') {
  console.log('Passed');
}
else {
  console.log('Failed');
}

console.log('works with 0')

if(formatCurrency(0) === '0.00') {
  console.log('Passed');
}
else {
  console.log('Failed');
}

console.log('Rounding up to the nearest cent');

if(formatCurrency(2000.5) === '20.01') {
  console.log('Passed');
}
else {
  console.log('Failed');
}

console.log('Rounding down to the nearest cent');

if(formatCurrency(2000.4) === '20.00') {
  console.log('Passed');
}
else {
  console.log('Failed');
}