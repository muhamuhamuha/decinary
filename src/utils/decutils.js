import { check as binCheck } from './binutils.js';
import { summer } from './utils.js';

export const toBinArr = function(num) {
  const bits = [];

  while (num > 0) {
    switch (num % 2) {
      case 1: 
        bits.unshift('1');
        break;
      case 0:
        bits.unshift('0');
        break;
    }

    num = Math.floor(num / 2);

  }

  return binCheck(bits.join(''))
}

export const toBinary = function(num) {
  return (
    toBinArr(num)
      .map( bit => bit === 0 ? '0' : '1' )
      .join('')
  )
}