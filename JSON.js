console.log("hi");

let dataRequest = new XMLHttpRequest();
// console.log(dataRequest);
dataRequest.addEventListener("load", dataRequestComplete);
dataRequest.addEventListener("error", dataRequestFailed);

function dataRequestComplete(event) {
    // console.log("colors have loaded");
    let msgData = JSON.parse(event.target.responseText);
    // console.log("color data", colorData);
    showData(msgData);
}

function showData(messages) {
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

function dataRequestFailed(event) {
    console.log("dataFailed", event);
}

dataRequest.open("GET", "fillermsg.json");
dataRequest.send();