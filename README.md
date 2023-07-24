# Frontend Mentor - Tip calculator app solution

This is a solution to the [Tip calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/tip-calculator-app-ugJNGbJUX). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge
Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Calculate the correct tip and total cost of the bill per person

### Screenshot

![Desktop Complete](./design/desktop-design-completed.jpg)

### Links
- Live Site URL: [Demo](https://abiel101.github.io/Splitter_Tip-Calculator-App/)

## My process

### Built with
- HTML5
- Tailwind CSS
- Javascript
- NodeJs

### What I learned

Building this project was a whole lot of fun, but It really did push me to come out of my comfort zone. One of the hardest challenges I had was actually figuring out how I can use an event listener to constantly be checking for the user input. If you notice, there is not "submit" button so that means that once the user inputs all field it should display the result. To make this happened I gave all inputs and btns there own event listeners that called a function. The function that was called then checked if all inputs where inputed and if not it will console log "Not Ready".

```javascript
// This is called each time that there is a change in the inputs or tips  
function outPutResults(){
  if(bill > 0 && percentage > 0 && numOfPeople > 0){
    result(percentage);
    resetBtn.classList.remove('inactive');
    resetBtn.classList.add('active');
  }else if(bill > 0 && customTip > 0 && numOfPeople > 0){
    result(customTip);
    resetBtn.classList.remove('inactive');
    resetBtn.classList.add('active');
  }else{
    console.log('Not Ready');
  }
}
```
Im also really proud of this piece of Javascript code.

```Javascript
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

// Custom input 
customInput.addEventListener('input', ()=>{
  customTip = customInput.value/100;
  percentage = 0;
  checkActive();
  outPutResults();
})
```
This basically imitated the filling of selecting different buttons and unselecting the one that was previously selected. It sort of like using the radio buttons in html and being able to only select one at a time.

The way it works is that each button once it has been clicked, it called a function that sets all the buttons as `inactive`. Then after it has completed that it sets the button that was clicked to `active` that way the button that was clicked stays active until you click another button.

As for the custom input, I had to figure out a way to set all the tip button in active so I just simply called the `checkActive()` function to set all the button to an inactive state once there was an input detected in the "customInput"

### Continued development

I am going to continue advancing my Javascript skills. Im thinking of adding `JQuery` to my skills, I hear that it make writing javascript a breeze.

### Useful resources

- [Tailwind CSS Website](https://tailwindcss.com/docs/installation) - This helps so much, it's like having a digital text book that you can quickly search for what ever you need.

## Author

- Website - [Abiel Ortega](https://abiel-code-dev.webflow.io)
- Frontend Mentor - [@abiel101](https://www.frontendmentor.io/profile/abiel101)
- Twitter - [@abielcodedev](https://www.twitter.com/abielcodedev)