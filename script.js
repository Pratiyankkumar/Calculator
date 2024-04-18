let calculation='';

calculation = localStorage.getItem('result1') || '';
document.querySelector('.js-result-para')
    .innerHTML = calculation;


function calculateResult(num) {
  calculation+=num;
  document.querySelector('.js-result-para')
    .innerHTML = calculation;
}

function resultShower() {
  calculation = eval(calculation);
  document.querySelector('.js-result-para')
    .innerHTML = calculation;
  localStorage.setItem('result1', JSON.stringify(calculation));
}