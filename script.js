

let calculation='';
function calculateResult(num) {
  document.querySelector('.js-result-para')
    .innerHTML = calculation+=num;
}

function resultShower() {
  calculation = eval(calculation);
  document.querySelector('.js-result-para')
    .innerHTML = calculation;
}