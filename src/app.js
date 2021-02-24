import * as bin from "./utils/binutils.js";
import * as dec from './utils/decutils.js';
import {
  hideByID,
  unhideByID,
  resetOutputs,
  addOutputs,
}  from './utils/utils.js';

const mainform = document.querySelector('#mainform');
const mainput = document.querySelector('#mainput');
const binput = document.querySelector('#binput');
const decinput = document.querySelector('#deciput');
const conv = document.querySelector('#conv');

hideByID('mainput');
hideByID('invalid');
resetOutputs();

function bringInput(evt) {
  resetOutputs();
  mainput.classList.remove('hidden');
  mainput.value = null;
}

binput.addEventListener('input', bringInput);
decinput.addEventListener('input', bringInput);

mainput.addEventListener('input', function (evt) {
  
  const val = this.value
  if (isNaN(val) || (val.match(/[^0-1]/) && binput.checked)) {
    unhideByID('invalid');
  } else {
    hideByID('invalid');
  }
  
  let binArr
  try {
    binArr = decinput.checked ? dec.toBinArr(val) : bin.check(val)
  } catch (RangeError) {
    hideByID('invalid');
    unhideByID('invalid');
    bringInput();
  }

  if (decinput.checked) {
    const neg = val.toString()[0] === '-' ? '4' : '3'
    mainput.setAttribute('maxlength', neg);

  } 
    
  else if (binput.checked) { mainput.setAttribute('maxlength', '8'); }

  const conVal = decinput.checked ? dec.toBinary(val) : bin.toDeci(binArr)
  const smr = bin.toSMR(binArr)
  const b1c = bin.to1Comp(binArr)
  const b2c = bin.to2Comp(b1c)
  const e128 = bin.toExcess128(binArr)

  addOutputs([conVal, smr, b1c, b2c, e128]);
})

mainform.addEventListener('submit', (evt) => {
  evt.preventDefault();
  return false;
}); 