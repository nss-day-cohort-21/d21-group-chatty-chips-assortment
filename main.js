console.log("this is the main.js speaking!")

//Define the buttons on the "static" page:

let input = document.getElementById("textInput");
let createButton = document.getElementById("createButton");
let outputCard = document.getElementById("greetingCardMain");

//Add an event listener to the SEND button: 
createButton.addEventListener("click", function() {
    createCard();

    //Add another event listener to the SEND button which allows RETURN key to do the same:

    // createButton.addEventListener('keyup', function(clickEnter) {
    //     if (clickEnter.which === 13) {
    // same as the button click function();

    //Define the outputText action
    let outputText = document.getElementById("greetingCardMain");
    outputText.innerHTML += input.value;
});

//The function which will be invoked to transfer the message from the input field 
// to the message storage area:

function createCard() {
    let greetingCard =
        `<h3 id="userMessage"></h3>
         </div><hr>
        <button id="deleteButton">Delete</button> 
         `;
    outputCard.innerHTML += greetingCard;
}