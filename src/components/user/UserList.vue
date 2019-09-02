<template>
    <ul>
        <li v-for="user in users" :key="user.id">
            <router-link :to="{ path: `/${user.id}` }">{{ user.name }}</router-link>
        </li>
    </ul>
</template>

<script>
import API from '../../utils/api';

export default {
    data() {
        return {
            users: []
        };
    },
    async beforeRouteEnter(to, from, next) {
        try {
            const response = await API.get(`users`);
            next(component => (component.users = response.data));
        } catch (err) {
            next(err);
        }
    }
};
</script>

<style></style>
