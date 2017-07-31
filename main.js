let input = document.getElementById("textInput");
let createButton = document.getElementById("createButton");

createButton.addEventListener("click", function(){
   
 
let outputText = document.getElementById("userMessage");
outputText.innerHTML = input.value;
});
