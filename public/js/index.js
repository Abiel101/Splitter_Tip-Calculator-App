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

numberOfPeople.addEventListener('focusout', () =>{
    if(numberOfPeople.value == 0){
      errorText.classList.add('textError');
      numberOfPeople.classList.remove('goodBorder');
      numberOfPeople.classList.add('errorBorder');
      errorText.innerHTML = 'Cant be zero';
    }else{
      errorText.classList.remove('textError');
      numberOfPeople.classList.add('goodBorder');
      numberOfPeople.classList.remove('errorBorder');
      errorText.innerHTML = '';
    }
})

