var Chatty = (function(newChatty){
console.log("hi there");

	let messageArray = [];

	newChatty.createCard = function(message) {
	    let greetingCard =
	        `<div id="space">
	        <hr>
	        <p class="messageToDelete">${message}</p>
	        <button class="deleteButton">Delete</button>
	        </div>`;
	       // greetingCard.push += [];

  let buttonDelete = document.querySelector(".deleteButton");
    console.log("buttonDelete", buttonDelete);
    buttonDelete.addEventListener("click", function() {
        console.log("this", this);
        let deleteMessage = document.getElementsByClassName("messageToDelete");
        console.log("messagetodelete", deleteMessage)
        this.parentElement.removeChild(deleteMessage[0]);

        // console.log(deleteMessage[0]);
        this.parentElement.removeChild(this);


	    });
    
	    return greetingCard;

	    console.log(greetingCard);
	    // debugger;
	}

	newChatty.addToMessageArray = function(message) {
	messageArray.push(message);
	console.log(messageArray);

	}

	// newChatty.takeAwayFromMessageArray = function(value) {
	// 	// messageArray.splice(index, 1);
	// 	console.log(messageArray);
	// }

	// console.log(messageArray);

	newChatty.addEventListenerToButton = function(value) {
    let buttonDelete = document.querySelector(".deleteButton");
    console.log("buttonDelete", buttonDelete);
    buttonDelete.addEventListener("click", function() {
        console.log("this", this);
        let deleteMessage = document.getElementsByClassName("messageToDelete");
        console.log("messagetodelete", deleteMessage)
        this.parentElement.removeChild(deleteMessage[0]);

        // console.log(deleteMessage[0]);
        this.parentElement.removeChild(this);


	    });
	};
	// return jsonStuff();
return newChatty;
})(Chatty || {});