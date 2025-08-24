const ChatRoom = require('./chatroom.js');

const chat = new ChatRoom();

chat.on('join', (user) => {
    console.log(`${user} has joined the Chat`);
})

chat.on('message', (user, message) => {
    console.log(`${user}: ${message}`);
})

chat.on('leave', (user) => {
    console.log(`${user} has left the Chat`);
})


// simulating the chat

chat.join('Manshi')
chat.join('Khushi')

chat.sendMessage('Manshi', 'Hey everyone!')
chat.sendMessage('Khushi', 'Hello all!')

chat.leave('Khushi');
chat.sendMessage('Khushi', "This message won't be sent");
chat.leave("Manshi")
