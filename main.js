console.log("this is the main.js speaking!")

//Define the buttons on the "static" page:

let input = document.getElementById("textInput");
let createButton = document.getElementById("createButton");
let outputCard = document.getElementById("messageMain");
let largeText = document.getElementById("largeText");
let wholeArea = document.getElementById("wholeArea");
let darkText = document.getElementById("darkTheme");
let wholeBig = document.getElementById("wholeBigText");

//Add an event listener to the SEND button: 
createButton.addEventListener("click", function() {
    createCard(input.value);

    //Add another event listener to the SEND button which allows RETURN key to do the same:

    // createButton.addEventListener('keyup', function(clickEnter) {
    //     if (clickEnter.which === 13) {
    // same as the button click function();

    //Define the outputText action

    let outputText = document.getElementById("messageMain");
    outputText.innerHTML += input.value;

});

//The function which will be invoked to transfer the message from the input field 
// to the message storage area:


function createCard(message) {
    let greetingCard =

        `
        <br>
        
         <hr>
         <button id="deleteButton">Delete</button> 
         <h3 id="userMessage"></h3>
        `;
    outputCard.innerHTML += greetingCard;
}

//This makes the radio buttons change depending on which one is clicked
darkText.addEventListener("change", toggleDark);
function toggleDark() {
        wholeBig.classList.toggle("dark");  
}
largeText.addEventListener("change", toggleLarge);
function toggleLarge() {
    wholeBig.classList.toggle("big");
}

        `<div><h3 class="messageToDelete">${message}</h3>
        <hr>
        <button class="deleteButton">Delete</button>
        </div>`;
    outputCard.innerHTML += greetingCard;
    addEventListenerToButton();
};

function addEventListenerToButton() {
    let buttonDelete = document.querySelector(".deleteButton");
    console.log(buttonDelete);
    buttonDelete.addEventListener("click", Element.prototype.remove = function() {
        console.log(this);
        let deleteMessage = document.getElementsByClassName("messageToDelete");
        this.parentElement.removeChild(deleteMessage[0]);

        console.log(deleteMessage[0]);
        this.parentElement.removeChild(this);


    });
};

