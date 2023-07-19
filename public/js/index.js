const customInput = document.getElementById('customInput');
const total = document.getElementById('total');
const tipAmount = document.getElementById('tipAmount');
const numberOfPeople = document.getElementById('numberOfPeople');
const bill = document.getElementById('bill');

let tip = 0;

function setTipTo(tipAmount){
  tip = tipAmount/100
  console.log(tip/100);
}

function resetEverything(){
  numberOfPeople.value = '';
  bill.value = '';
  customInput.value = '';
  total.innerText = '0.00';
  tipAmount.innerText = '0.00';
}