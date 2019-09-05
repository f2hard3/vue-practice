<template>
    <div class="center">
        <h1>Todo List</h1>
        <ul>
            <TodoItem v-for="todo in todos" :key="todo.id" :todo="todo">{{
                todo.name
            }}</TodoItem>
            <TodoInput @addTodo="addTodo($event)" />
        </ul>
    </div>
</template>

<script>
import uuid from 'uuid/v4';
import TodoItem from './TodoItem';
import TodoInput from './TodoInput';

export default {
    components: { TodoItem, TodoInput },
    data() {
        return {
            todos: [],
            todoName: ''
        };
    },
    methods: {
        addTodo(name) {
            this.todos = [...this.todoName, { id: uuid(), name }];

            return this.todos;
        }
    }
};
</script>

<style>
.center {
    text-align: center;
}
ul,
li {
    list-style-type: none;
    margin-left: 0;
    padding-left: 0;
}
</style>
