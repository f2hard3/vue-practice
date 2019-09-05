/* eslint-disable no-console */
import Vue from 'vue';
import Router from 'vue-router';
import TodoList from './components/TodoList';
// import { userRoutes } from './components/user/user.routes';

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'TodoList',
            component: TodoList
        }
    ]
});

// router.beforeEach((to, from, next) => {
//     console.log(`Route to`, to);
//     console.log(`Route from `, from);
//     next();
// });

// router.beforeResolve((to, from, next) => {
//     console.log(`Before reslove:`);
//     console.log(`Route to`, to);
//     console.log(`Route from`, from);
//     next();
// });

// router.afterEach((to, from) => {
//     console.log(`After each: `);
//     console.log(`Route to: `, to);
//     console.log(`Route from: `, from);
// });
