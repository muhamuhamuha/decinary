import * as bin from "./binutils.js";
import * as dec from './decutils.js';

const mainform = document.querySelector('#mainform');
const mainput = document.querySelector('#mainput');
const binput = document.querySelector('#binput');
const decinput = document.querySelector('#deciput')

function bringInput(evt) {
  mainput.setAttribute('type', 'text')
  mainput.value = '';
}

mainform.addEventListener('submit', (evt) => {
  evt.preventDefault();
  return false;
}); 

binput.addEventListener('change', bringInput);
decinput.addEventListener('change', bringInput);

mainput.addEventListener('input', function (evt) {
  const notBin = /[^0-1]/;
  
  if (!binput.checked && !decinput.checked) {
    console.log('Please check one of the two buttons.')
    mainput.setAttribute('type', 'hidden');
    // mainform.insertAfter
  }

  if (decinput.checked) {
    const num = this.value

    const neg = num.toString()[0] === '-' ? '4' : '3'
    mainput.setAttribute('maxlength', neg);

    const d2b = deci.toBin(num)
    console.log(`d2b -> ${d2b}`)

    // console.log(`${isNaN(this.value)} value isNaN`)

  } else {
    mainput.setAttribute('maxlength', '8');

    const binary = this.value;
    const evalBin = bin.checkBin(binary);

    const b2d = bin.toDeci(evalBin)
    const smr = bin.toSMR(evalBin)
    const b1c = bin.to1Comp(evalBin)
    const e32 = bin.toExcess32(evalBin)
    const b2c = bin.to2Comp(b1c)

    console.log(`b2d -> ${b2d}`)
    console.log(`SMR -> ${smr}`)
    console.log(`b1c -> ${b1c}`)
    console.log(`e32 -> ${e32}`)
    console.log('~~~~~')

  }
})