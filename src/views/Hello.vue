<template>
    <div class="hello">
        <h1>Hello, {{ $route.params.name }}!</h1>
    </div>
</template>

<script>
// @ is an alias to /src
/* eslint-disable no-console */
export default {
    name: 'Hello',
    props: ['name'],
    // eslint-disable-next-line no-unused-vars
    beforeRouteEnter(to, from, next) {
        console.log(`I'm called before entering the route!`);
        next();
    },
    beforeRouteUpdate(to, from, next) {
        console.log(to);
        console.log(from);
        console.log(`Hello ${to.params.name}`);
        next();
    },
    beforeRouteLeave(to, from, next) {
        console.log(`I'm called before leaving the route!`);
        console.log(
            `I have access to the component instance, here's a proof!\nName:${this.name}`
        );
        next();
    }
};
</script>
