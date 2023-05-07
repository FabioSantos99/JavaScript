const container = document.querySelector(".container");
const color = document.querySelector('input');
const value = document.querySelector('#value');

const defaultColor = '#fff';
container.style.backgroundColor = `${defaultColor}`;

function onChangeBg() {
    container.style.backgroundColor = `${color.value}`
}

function onIncrement() {
    value.innerHTML = `${parseInt(value.innerText) + 1}`
};

function onDecrement() {
    value.innerHTML = `${parseInt(value.innerText) - 1}`
};

function onClear() {
    value.innerHTML = 0
};