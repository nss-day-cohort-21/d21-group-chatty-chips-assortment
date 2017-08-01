function createCard() {
    let greetingCard =
        `<h3 id="userMessage"></h3>
         </div><hr>
        <button id="deleteButton">Delete</button> 
         `;
    outputCard.innerHTML += greetingCard;
}


$(".deleteButton").on("click", function() {
    $(this).closest("userMessage").remove();
});