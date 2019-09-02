<template>
    <div>
        <ul>
            <li v-for="post in posts" :key="post.id">{{ post.title }}</li>
        </ul>
    </div>
</template>

<script>
import API from '../../utils/api';

export default {
    data() {
        return {
            posts: []
        };
    },
    beforeRouteEnter(to, from, next) {
        next(component => {
            API.get(`posts?userId=${to.params.userId}`)
                .then(response => (component.posts = response.data))
                .catch(err => next(err));
        });
    }
};
</script>

<style></style>
