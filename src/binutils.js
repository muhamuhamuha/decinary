export const summer = (sumVal, value) => sumVal + value


export const evaluateBinary = function(binary) {

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


export const bin2deci = (evalBin) => {
  return [...evalBin].reduce(summer)
}


export const bin2smr = (evalBin) => {
  if (evalBin[0] !== 0)
    return (
      [...evalBin]
        .slice(1)
        .reduce(summer) * -1
    )

  return bin2deci(evalBin)
}


export const bin1comp = (evalBin) => {
  return (
    [...evalBin]
      .map(bit => bit === 0 ? 1 : 0)
      .join('')
  )
}


export const bin2comp = (evalBin) => {
  console.log('hello')
}