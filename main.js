// let input = document.getElementById("textInput");
// let createButton = document.getElementById("createButton");

// createButton.addEventListener("click", function(){
   
//  let outputText = document.getElementById("userMessage");
// outputText.innerHTML = input.value;
// });

// createButton.addEventListener('keyup', function(clickEnter) {
//     if (clickEnter.which === 13) {
        // same as the button click function();


// let userMessage = document.querySelector('#clear');
// let textarea = document.querySelector('#output');

// userMessage.addEventListener('click', function () {
//     textarea.value = '';
// }, false);

let input = document.getElementById("textInput");
let createButton = document.getElementById("createButton");
let outputCard = document.getElementById("greetingCardMain");
let darkText = document.getElementById("darkTheme");
let largeText = document.getElementById("largeText");
let darkArea = document.getElementById("darkStuff");
// let outputText = document.getElementById("userMessage");
createButton.addEventListener("click", function(){
    createCard();

    // userMessage();
let outputText = document.getElementById("greetingCardMain");
outputText.innerHTML += input.value;
// let deleteButton = document.getElementById("deleteButton");
// console.log(outputText);
// let garbage = deleteButton.removeChild(outputCard);
});
function createCard() {
    let greetingCard = 
        `<h3 id="userMessage"></h3>
         </div><hr>
        <button id="deleteButton">Delete</button>
        
        
         
         `;
outputCard.innerHTML += greetingCard;
}

.addEventListener("click", function(){
if (darkText.checked === true) {
		darkArea.classList.toggle("dark");	
} else if (largeText.checked === true) {
		darkArea.classList.toggle("big");
}
});

