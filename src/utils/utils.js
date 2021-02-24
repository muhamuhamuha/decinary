const pout = document.querySelectorAll('.pout');
const output = document.querySelector('#output');
const invalid = document.querySelector('#invalid');

export const summer = (sumVal, value) => sumVal + value

export function addOutputs(outputs) {

    const titles = [
        'Converted Value',
        'Signed Magnitude',
        '1\'s Complement',
        '2\'s Complement',
        'Excess 128 Notation'
    ]

    for (let i = 0; i < pout.length; i++) {
        pout[i].classList.remove('hidden')
        pout[i].textContent = `${titles[i]}: `
        pout[i].textContent += outputs[i];
    }
}


export function resetOutputs() {

    for (let p of pout) {
        p.textContent = '';
        p.classList.remove('hidden');
        p.classList.add('hidden');
    }
}


export function hideByID(id) {
    document.querySelector(`#${id}`).classList.add('hidden');
}


export function unhideByID(id) {
    document.querySelector(`#${id}`).classList.remove('hidden');
}