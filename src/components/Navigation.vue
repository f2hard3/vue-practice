<template>
    <nav>
        <button @click="navigateToRoute('/about')">/about</button>
        <button @click="navigateToRoute('/hello/Sunggon')">/hello/sunggon</button>
    </nav>
</template>

<script>
export default {
    methods: {
        navigateToRoute(path) {
            // this.$router.push(path);
            this.$router.replace({ path });
        }
    }
};
</script>

<style></style>
