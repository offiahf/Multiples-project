let inputExample = document.querySelector('.example') // where the user enters a value
let mainform = document.querySelector('.main-form')
let ShowResults = document.querySelector('.display-value')
let domValues = document.querySelectorAll('.userValue') // Will dynamically append what even the user enters in the browser
let changeBG = document.querySelector('.bg-section')


  
mainform.addEventListener('keyup', e =>{
    // called on the event object
    e.preventDefault();

// [Nodelist] Dynamically appends the value  user enters in the input field.
// Displays it in the browser
domValues.forEach(item =>{
   item.textContent = inputExample.value
})

// The userParamater serves a placeholder for whatever value a user enters.
let calculation = (userParameter) =>{
   let patternInput = /^[0-9]{1,}/
     if(patternInput.test(userParameter)){
      mainform.one.value = userParameter * 1
      mainform.two.value = userParameter * 2
      mainform.three.value = userParameter * 3
      mainform.four.value = userParameter * 4
      mainform.five.value = userParameter * 5
      mainform.six.value = userParameter * 6
      mainform.seven.value = userParameter * 7
      mainform.eight.value = userParameter * 8
      mainform.nine.value = userParameter * 9
      mainform.ten.value = userParameter * 10
      mainform.eleven.value = userParameter * 11
      mainform.twelve.value = userParameter * 12
      ShowResults.style.display = 'block';
      inputExample.setAttribute('style', 'background : green; color: #fff')
      changeBG.style.background = '#131215';

     }
     else{
       ShowResults.style.display = 'none'
       inputExample.setAttribute('style', 'background : red; color: #fff')
       changeBG.style.background = '#FF6800';
     }
}

let usersValue = inputExample.value;
calculation(usersValue) //argument becomes whatever the user enters 

})






