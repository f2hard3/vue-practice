<template>
    <div>
        <h1>{{ count }}</h1>

        <input type="text" @change="changeHandler" />

        <button @click="INCREMENT">+</button>
        <button @click="DECREMENT">-</button>
        <button @click="RESET">R</button>
    </div>
</template>

<script>
import { mapActions, mapMutations, mapState } from 'vuex';
import { types } from '../store/count';

export default {
    methods: {
        ...mapActions('count', Object.values(types)),
        ...mapMutations('count', [types.SET_AMOUNT]),
        changeHandler(event) {
            this[types.SET_AMOUNT]({ amount: Number(event.target.value) });
        }
    },
    computed: {
        ...mapState('count', ['count'])
    }
};
</script>

<style></style>
