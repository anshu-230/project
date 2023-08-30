const chatOutput = document.getElementById('chat-output');
const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');

var ws = new WebSocket ('ws://echo.websocket.org');
  
ws.addEventListener('open', () => {
    console.log('Connected to the WebSocket server');
});

ws.addEventListener('message', event => {
    const message = event.data;
    const messageElement = document.createElement('div');
    messageElement.textContent = message;
    chatOutput.appendChild(messageElement);
    chatOutput.scrollTop = chatOutput.scrollHeight;
});

sendButton.addEventListener('click', () => {
    const message = messageInput.value;
    if (message) {
        ws.send(message);
        messageInput.value = '';
    }
});


  
  