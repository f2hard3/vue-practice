/* eslint-disable no-console */
const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const PORT = 3000;

http.listen(PORT, () => console.log(`Listening on port: ${PORT}`));

const messages = [];
const emitMessages = messages => io.emit('chatMessage', messages);

// eslint-disable-next-line no-unused-vars
io.on('connection', socket => {
    console.log('A user connected.');

    emitMessages(messages);

    socket.on('chatMessage', message => {
        messages.push(message);

        emitMessages(messages);

        console.log('message', message);
        console.log('messages', messages);
    });
});
