<template>
    <div>
        <ul>
            <li v-for="item in shoppingList" :key="item">
                {{ item }}
            </li>
        </ul>
    </div>
</template>

<script>
import EventBus from '../EventBus';

export default {
    props: ['shoppingList'],
    created() {
        EventBus.$on('addShoppingItem', item =>
            // eslint-disable-next-line no-console
            console.log(`There was an item added! ${item}`)
        );
    }
};
</script>

<style></style>
