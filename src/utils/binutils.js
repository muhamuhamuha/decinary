import { summer } from './utils.js';

export const check = function(binary) {

  const binaryPlaces = (
    [...Array(8).keys()]
      .map(i => 2 ** i)
      .reverse()
  )

  if (binary.length !== 8) {
    // push a bunch of leading zeros at the beginning
    // of the binary string to make it an 8-bitter
    binary = (
      [...Array(8 - binary.length).keys()]
        .map(i => '0')
        .concat([...binary])
        .join('')
    )
  }

  return (
    [...binary]
      // zip two arrays together
      .map((bit, i) => ([binaryPlaces[i], parseInt(bit)]))
      .map(arr => arr[0] * arr[1])
  )
}


export const toDeci = (evalBin) => {
  return [...evalBin].reduce(summer)
}


export const toSMR = (evalBin) => {
  if (evalBin[0] !== 0)
    return (
      [...evalBin]
        .slice(1)
        .reduce(summer) * -1
    )

  return toDeci(evalBin)
}


export const to1Comp = (evalBin) => {
  return (
    [...evalBin]
      .map(bit => bit === 0 ? 1 : 0)
      .join('')
  )
}


export const toExcess128 = evalBin => {
  return (
    [...evalBin]
      .slice(2)
      .reduce(summer) - 128
  )
}


export const to2Comp = (oneComp) => {
  return add(oneComp, '00000001')
}


export const add = function(b1, b2) {

  let res = ''
  let carry = 0

  for(let i = 7; i >= 0; i--) {
    let temp = carry

    temp += b1[i] === '1' ? 1 : 0
    temp += b2[i] === '1' ? 1 : 0

    res = (temp % 2 === 1 ? '1' : '0') + res
    carry = temp < 2 ? 0 : 1
  }

  if (carry !== 0)
    res = '1' + res

  return res

}