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


/* -------------------------------------
Sets up the US dollar (might make it for other currencies).
-------------------------------------*/
let USDollar = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});
totalOutput.innerHTML = USDollar.format(0);
tipAmountOutput.innerHTML = USDollar.format(0);


/* -------------------------------
Main function that runs to give output result
-------------------------------*/
let bill = 0;
let numOfPeople = 0;
let customTip = 0;
let percentage = 0;

//This gets called depending which tip I am using and outputs resutls
function result(tip){ 
  let tipTotal = bill * tip;
  let tipPerPerson = tipTotal / numOfPeople;
  let totalPerPerson = tipPerPerson + (bill / numOfPeople);
  tipAmountOutput.innerHTML = USDollar.format(tipPerPerson);
  totalOutput.innerHTML = USDollar.format(totalPerPerson);
}
function outPutResults(){
  if(bill > 0 && percentage > 0 && numOfPeople > 0){
    //Need to move these for the runction to animate up and down the numbers.
    result(percentage);
    resetBtn.classList.remove('inactive');
    resetBtn.classList.add('active');
  }else if(bill > 0 && customTip > 0 && numOfPeople > 0){
    //Need to move these for the runction to animate up and down the numbers.
    result(customTip);
    resetBtn.classList.remove('inactive');
    resetBtn.classList.add('active');
  }else{
    console.log('Not Ready');
  }
}


/*----------------------------------------
Even listeners for when there is changes in inputs
----------------------------------------*/
function setTipTo(tipAmount){
  percentage = tipAmount/100;
}
// Event listeners to listen for any changes in all inputs and clicked buttons
billInput.addEventListener('change', ()=>{
  bill = billInput.value;
  outPutResults();
})
customInput.addEventListener('input', ()=>{
  customTip = customInput.value/100;
  percentage = 0;
  checkActive();
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


/* -------------------------------------------------
Changes the state of the buttons when you click on them
------------------------------------------------- */
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

/* ------------------------------
Reset Button to reset everything
------------------------------ */
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
    resetBtn.classList.remove('active')
    resetBtn.classList.add('inactive')

    checkActive();
    console.log(bill, numOfPeople, customTip, percentage);
  }
})

/* ----------------------------------------------------------------------
Function to give error when nothing has been inputed for number of people
---------------------------------------------------------------------- */
numberOfPeopleInput.addEventListener('focusout', () =>{
    if(numberOfPeopleInput.value == 0){
      errorText.innerHTML = 'Can\'t be zero';
      errorText.classList.add('textError');
      numberOfPeopleInput.classList.remove('goodBorder');
      numberOfPeopleInput.classList.add('errorBorder');
    }else{
      errorText.classList.remove('textError');
      numberOfPeopleInput.classList.add('goodBorder');
      numberOfPeopleInput.classList.remove('errorBorder');
      errorText.innerHTML = '';
    }
})

