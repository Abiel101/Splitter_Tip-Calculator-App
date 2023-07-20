const customInput = document.getElementById('customInput');
const total = document.getElementById('total');
const tipAmount = document.getElementById('tipAmount');
const numberOfPeople = document.getElementById('numberOfPeople');
const bill = document.getElementById('bill');
const errorText = document.getElementById('errorText')


function setTipTo(tipAmount){
  let tip = tipAmount/100
  console.log(tip);
}

function resetEverything(){
  numberOfPeople.value = '';
  bill.value = '';
  customInput.value = '';
  total.innerText = '0.00';
  tipAmount.innerText = '0.00';
}

numberOfPeople.addEventListener('click', ()=>{
    errorText.classList.add('textError');
    errorText.innerHTML = 'Cant be zero';
})

