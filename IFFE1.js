// var Chatty = (function(){
// console.log("hi");

// return {

// }
var Chatty = (function(newChatty) {
	console.log("anything");
	
newChatty.getMessages = function() {
	let dataRequest = new XMLHttpRequest();
	

	// console.log(dataRequest);
	dataRequest.addEventListener("load", Chatty.dataRequestComplete);
	dataRequest.addEventListener("error", Chatty.dataRequestFailed);

	dataRequest.open("GET", "fillermsg.JSON");
	dataRequest.send();
}
	newChatty.dataRequestComplete = function(event) {
	    console.log("colors have loaded");
	    let msgData = JSON.parse(event.target.responseText);
	    console.log("message data", msgData);
	    Chatty.showData(msgData);
	}

	newChatty.showData = function(messages) {
	    let messageArea = document.getElementById("userMessage");
	    let messageData = '';

	    for (item in messages) {
	        let messageItem = messages[item];
	        messageData += "<div id='messageArea'>";
	        messageData += "<hr>"
	        messageData += "<button>Delete</button>";
	        // messageData += "<h2 id='messageTitle'>" + "by:" + " " + messageItem.Name;
	        messageData += "<p id='message'>" + messageItem.Message;


	        messageData += "</div>";
	    }
	    messageArea.innerHTML += messageData;
	}

	newChatty.dataRequestFailed = function(event) {
		    console.log("dataFailed", event);
		}

		

	// return jsonStuff();
return newChatty;

})(Chatty || {});