export const toBin = function(num) {
  const bits = [];
  let givenNum = num;

  while (givenNum > 0) {
    if (givenNum % 2 === 1) 
      bits.unshift('1');
    else
      bits.unshift('0');

    givenNum = Math.floor(givenNum / 2);

  }

  if (bits.length !== 8) {
    const len = bits.length > 0 ? 8 - bits.length : 8
    return (
      [...Array(len).keys()]
        .map( i => '0' )
        .concat([...bits])
        .join('')
    )
  }

  return bits.join('')
}
