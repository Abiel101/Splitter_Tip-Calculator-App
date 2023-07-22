// Selectors
// Bill, Custom Inputs, and Number of People
const billInput = document.getElementById('bill');
const customInput = document.getElementById('customInput');
const numberOfPeopleInput = document.getElementById('numberOfPeople');
const btnInput = document.querySelectorAll('#tipBtn');
//Total and Tip Amount Per Person
const totalOutput = document.getElementById('total');
const tipAmountOutput = document.getElementById('tipAmount');

// For the error text "Can't be zero".
const errorText = document.getElementById('errorText')
const resetBtn = document.getElementById('resetBtn');



/*----------------------------------------
Even listeners for when there is changes in inputs
----------------------------------------*/
let bill = 0;
let numOfPeople = 0;
let customTip = 0;
let percentage = 0;
let tipCheck = 0

// let tipTotal = bill * percentage;
// let tipPerPerson = tipTotal / numberOfPeopleInput.value;
// let totalPerPerson = tipPerPerson + (billInput.value / numberOfPeopleInput.value);

function setTipTo(tipAmount){
  percentage = tipAmount/100;
  tipCheck = tipAmount;
}
// Event listeners to listen for any changes in all inputs and clicked buttons
billInput.addEventListener('change', ()=>{
  bill = billInput.value;
  outPutResults();
})
customInput.addEventListener('change', ()=>{
  customTip = customInput.value;
  outPutResults();
})
numberOfPeopleInput.addEventListener('change', ()=>{
  numOfPeople = numberOfPeopleInput.value;
  outPutResults();
})
//The buttons, since there is multiple it becomes an array. 
Array.from(btnInput).forEach(btn => btn.addEventListener('click', ()=>{
  outPutResults();
}))



function outPutResults(){
  if(bill > 0 && percentage > 0 && numOfPeople > 0){
    // Console log needed data
    console.log(`Bill: ${bill} \nCustom Tip: ${customTip} \nNumber Of People: ${numOfPeople} \nTip In Decimal: ${percentage}`)
    
    resetBtn.classList.remove('inactive');
    resetBtn.classList.add('active');
  }else if(bill > 0 && customTip > 0 && numOfPeople > 0){
    console.log(`Bill: ${bill} \nCustom Tip: ${customTip} \nNumber Of People: ${numOfPeople} \nTip In Decimal: ${percentage}`)

    resetBtn.classList.remove('inactive');
    resetBtn.classList.add('active');
  }else{
    console.log('Not Ready');
  }
}


// Changes the state of the buttons when you click on them
function checkActive(){
  for(let i = 0; i < btnInput.length; i++){
    if(btnInput[i].classList.contains('tip-btns-active')){
      btnInput[i].classList.remove('tip-btns-active');
    }
  }
}
btnInput[0].addEventListener('click', ()=>{
  checkActive();
  btnInput[0].classList.add('tip-btns-active');
})
btnInput[1].addEventListener('click', ()=>{
  checkActive();
  btnInput[1].classList.add('tip-btns-active');
})
btnInput[2].addEventListener('click', ()=>{
  checkActive();
  btnInput[2].classList.add('tip-btns-active');
})
btnInput[3].addEventListener('click', ()=>{
  checkActive();
  btnInput[3].classList.add('tip-btns-active');
})
btnInput[4].addEventListener('click', ()=>{
  checkActive();
  btnInput[4].classList.add('tip-btns-active');
})

// Reset Button to reset everything
resetBtn.addEventListener('click', ()=>{
  if(resetBtn.classList.contains('active')){
    bill = 0;
    numOfPeople = 0;
    customTip = 0;
    percentage = 0;
    tipCheck = 0
    numberOfPeopleInput.value = '';
    billInput.value = '';
    customInput.value = '';
    total.innerText = '0.00';
    tipAmount.innerText = '0.00';
    checkActive();
    resetBtn.classList.remove('active')
    resetBtn.classList.add('inactive')
    console.log(bill, numOfPeople, customTip, percentage, tipCheck);
  }
})

// Function to give error when nothing has been inputed for number of people
numberOfPeopleInput.addEventListener('focusout', () =>{
    if(numberOfPeopleInput.value == 0){
      errorText.classList.add('textError');
      numberOfPeopleInput.classList.remove('goodBorder');
      numberOfPeopleInput.classList.add('errorBorder');
      errorText.innerHTML = 'Cant be zero';
    }else{
      errorText.classList.remove('textError');
      errorText.classList.add('textGood');
      numberOfPeopleInput.classList.add('goodBorder');
      numberOfPeopleInput.classList.remove('errorBorder');
      errorText.innerHTML = '';
    }
})

