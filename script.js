const btn = document.querySelector('#btn');
const e_btn = document.querySelector('#e_btn');
const square = document.querySelector('#square');
const circle = document.querySelector('#circle');


btn.onclick = function () {
  const text = document.querySelector('#text').value;
  square.style.backgroundColor = text;
  e_btn.style.display = 'none';
};

const logger = function (event) {
  circle.style.width = event.target.value + '%';
  circle.style.height = event.target.value + '%';
};

document.querySelector('#range').addEventListener('input', logger);