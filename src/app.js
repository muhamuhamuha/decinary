const mainform = document.querySelector('#mainform');
const mainput = document.querySelector('.mainput');
const binput = document.querySelector('#binput');
const decinput = document.querySelector('#deciput')


mainform.addEventListener('submit', (evt) => {
  evt.preventDefault();
  return false;
}); 


mainput.addEventListener('input', function (evt) {
  const notBin = /[^0-1]/;
  
  if (!binput.checked && !decinput.checked) {
    console.log('Please check one of the two buttons.')
  }

  if (this.value.match(notBin)) {

    console.log('not bin')
    console.log(`${isNaN(this.value)} value isNaN`)
  } else {
    // it's a binary pattern!

    console.log('bin')
    binary = this.value
    b2d = binaryToDecimal(binary)
    console.log(b2d)
    // smr = binarySMR(binary)
  }
})

const summer = (sumVal, value) => sumVal + value

function binarySMR(binary) {

  const smrArr = (
    [...binary]
      .map((bit, i) => ([i, parseInt(bit)]))
      // .reverse()
  )
  console.log(smrArr)

  const lead = smrArr.pop()
  const smrBits = smrArr.map(
    bitArr => (2 ** (bitArr[0] - 1)) * bitArr[1]
  )

  // console.log(smrBits)
  const MSB = lead[1] === 1 ? -1 : 0

  // console.log([MSB, ...smrBits])
}


function binaryToDecimal(binary) {

  const binaryPlaces = (
    [...Array(8).keys()]
      .map(i => 2 ** i)
      .reverse()
  )

  if (binary.length !== 8) {
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
      .map((arr => arr[0] * arr[1]))  // multiply with zipped index
      .reduce(summer)  // sum it all up
  )
}