import { mount } from '@vue/test-utils';
import TodoInput from '../../src/components/TodoInput';

describe('TodoInput', () => {
    it('should fire an event named addTodo with todo name', () => {
        const addTodo = jest.fn();
        const wrapper = mount(TodoInput);

        wrapper.vm.$on('addTodo', addTodo);
        wrapper.vm.addTodo('Clean the car');

        expect(addTodo).toHaveBeenCalledTimes(1);
        expect(addTodo).toHaveBeenCalledWith('Clean the car');
    });
});
