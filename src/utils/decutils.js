import * as bin from './binutils.js';
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

  return bin.check(bits.join(''))
}


export const toBinary = function(num) {

  if (num < -128)
    return 'cannot represent that negative number with 8 bits'

  else if (num >= 0)
    return (
      [...toBinArr(num)]
        .map( bit => bit === 0 ? '0' : '1' )
        .join('')
    )
  
  else
    return bin.add(to1Comp(num), '00000001')
}


export const to1Comp = function(num) {

  if (num < -128)
    return 'overflow, cannot represent with 8 bits.'
   
  const binary = (
    [...toBinArr(Math.abs(num))]
      .map( bit => bit === 0 ? '0' : '1' )
      .join('')
  )

  if (num >= 0)
    return binary

  return (
    [...binary]
      .map( bit => bit === '0' ? '1' : '0' )
      .join('')
  )
}


export const toExcess128 = function(num) {
  const converted = 128 + parseInt(num);
  if (converted > 255)
    return 'overflow, cannot be represent with 8 bits'
  return toBinary(converted);
}