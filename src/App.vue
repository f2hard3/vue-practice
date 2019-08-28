<template>
    <div>
        <input type="text" v-model="message" />
        <button @click="sendMessage()">+</button>

        <message
            v-for="message in messageList"
            :message-text="message.text"
            :key="`${message.text}${message}`"
        >
            <h2 slot="date">{{ message.date | date }}</h2>
        </message>
    </div>
</template>

<script>
import convertDateToString from './filters/date.filter';
import Message from './components/Message';

export default {
    components: {
        Message
    },
    filters: {
        date: convertDateToString
    },
    data() {
        return {
            message: '',
            messageList: []
        };
    },
    methods: {
        sendMessage() {
            if (this.message)
                this.messageList.push({ date: new Date(), text: this.message });
            this.message = '';
        }
    }
};
</script>

<style>
body {
    text-align: center;
}
</style>
