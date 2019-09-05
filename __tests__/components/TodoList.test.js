import { mount } from '@vue/test-utils';
import TodoList from '../../src/components/TodoList';
import TodoItem from '../../src/components/TodoItem';
import TodoInput from '../../src/components/TodoInput';

describe('TodoList', () => {
    it('should display name of Todo item', () => {
        const todos = [{ id: 1, name: 'Wash the dishes' }];
        const wrapper = mount(TodoList, { data: () => ({ todos }) });

        expect(wrapper.vm.todos).toContainEqual(todos[0]);

        const todoItemWrapper = wrapper.find(TodoItem).text();
        expect(todoItemWrapper).toBe(todos[0].name);
    });

    it('should add an item to the todo list', () => {
        const wrapper = mount(TodoList);

        const todos = wrapper.vm.todos;
        const newTodos = wrapper.vm.addTodo('Go to work');
        expect(todos.length).toBeLessThan(newTodos.length);

        newTodos.map(item => expect(item.id).toBeTruthy());
    });

    it('should add an item to the todo list when the button is clicked', () => {
        const wrapper = mount(TodoList);

        wrapper.find('form').trigger('submit', 'Finish the ticket');

        const todos = wrapper.vm.todos;
        expect(todos.length).toBe(1);
    });

    it('should call addTodo when form is submitted', () => {
        const wrapper = mount(TodoList);
        wrapper.vm.addTodo = jest.fn();
        wrapper.find('form').trigger('submit', 'Clean the car');
        expect(wrapper.vm.addTodo).toHaveBeenCalledTimes(1);
    });

    it('should call addTodo when the addTodo event happens', () => {
        const wrapper = mount(TodoList);
        wrapper.vm.addTodo = jest.fn();
        wrapper.find(TodoInput).vm.$emit('addTodo', 'Clean the car');
        expect(wrapper.vm.addTodo).toHaveBeenCalledTimes(1);
        expect(wrapper.vm.addTodo).toHaveBeenCalledWith('Clean the car');
    });

    it('add an item to the todolist when the addTodo event happens', () => {
        const wrapper = mount(TodoList);
        wrapper.find(TodoInput).vm.$emit('addTodo', 'Clean the car');

        expect(wrapper.vm.todos.length).toBe(1);
    });
});
