import { mount } from '@vue/test-utils';
import TodoItem from '../../src/components/TodoItem';

describe('TodoItem', () => {
    it('should display name of Todo item', () => {
        const todo = { id: 1, name: 'Wash the dishes' };
        const wrapper = mount(TodoItem, { propsData: { todo } });

        expect(wrapper.vm.todo).toBe(todo);

        const liWrapper = wrapper.find('li').text();
        expect(liWrapper).toBe(todo.name);
    });
});
