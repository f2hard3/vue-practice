<template>
    <div>
        <Navbar />
        <h1 v-if="isConnected">Connected to the server.</h1>
        <h1 v-else>Disconnected from the server</h1>
        <div class="container">
            <MessageList :messages="messages" />
            <MessageForm />
        </div>
        <ConnectionStatus :isConnected="isConnected" />
    </div>
</template>

<script>
import MessageList from './MessageList';
import MessageForm from './MessageForm';

export default {
    data() {
        return {
            isConnected: false,
            messages: [
                { id: 1, username: 'Paul', message: 'Hey!' },
                { id: 2, username: 'Evan', message: 'How are you?' },
                { id: 3, username: 'Paul', message: 'Fine, thank you and you?' },
                { id: 4, username: 'Evan', message: 'Fine, too.' },
                { id: 5, username: 'Paul', message: 'Let us play tennis!' }
            ]
        };
    },
    components: {
        MessageList,
        MessageForm
    },
    sockets: {
        connect() {
            this.isConnected = true;
        },
        disconnect() {
            this.isConnected = false;
        },
        chatMessage(messages) {
            this.messages = messages;
        }
    }
};
</script>

<style>
.container {
    width: 300px;
    margin: 0 auto;
}
</style>
