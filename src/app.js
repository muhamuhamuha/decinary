import * as bins from "./binutils.js";

const mainform = document.querySelector('#mainform');
const mainput = document.querySelector('.mainput');
const binput = document.querySelector('#binput');
const decinput = document.querySelector('#deciput')

function bringInput(evt) { mainput.setAttribute('type', 'text') }

mainform.addEventListener('submit', (evt) => {
  evt.preventDefault();
  return false;
}); 


binput.addEventListener('change', bringInput)
decinput.addEventListener('change', bringInput)

mainput.addEventListener('input', function (evt) {
  const notBin = /[^0-1]/;
  
  if (!binput.checked && !decinput.checked) {
    console.log('Please check one of the two buttons.')
    mainput.setAttribute('type', 'hidden');
  }

  if (decinput.checked) {
    const neg = this.value.toString()[0] === '-' ? '4' : '3'
    console.log(neg)
    mainput.setAttribute('maxlength', neg);

    const num = this.value

    const d2b = deci2bin(num)
    console.log(d2b)

    // console.log(`${isNaN(this.value)} value isNaN`)

  } else {
    mainput.setAttribute('maxlength', '8');

    const binary = this.value;

    const evalBin = bins.evaluateBinary(binary);

    const b2d = bins.bin2deci(evalBin)
    const smr = bins.bin2smr(evalBin)
    const b1c = bins.bin1comp(evalBin)

    console.log(`b2d -> ${b2d}`)
    console.log(`SMR -> ${smr}`)
    console.log(`b1c -> ${b1c}`)
  }
})


const deci2bin = function(num) {
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
    console.log(`bits len -> ${bits.length}`)
    console.log(`len ${len}`)
    return (
      [...Array(len).keys()]
        .map( i => '0' )
        .concat([...bits])
        .join('')
    )
  }

  return bits.join('')
}

