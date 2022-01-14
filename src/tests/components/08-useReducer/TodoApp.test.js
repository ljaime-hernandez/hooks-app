import { act } from "@testing-library/react";
import { shallow, mount } from "enzyme";
import { TodoApp } from "../../../components/08-useReducer/TodoApp";
import { demoTodos } from "../../fixtures/demoTodos";


describe('Tests on TodoApp component', () => {
    
    const wrapper = shallow(<TodoApp/>);

    Storage.prototype.setItem = jest.fn(() => {});

    test('should render properly', () => {
        
        expect(wrapper).toMatchSnapshot();
    })
    
    test('should add a task', () => {
        
        const wrapper = mount(<TodoApp/>);

        act(() => {
            wrapper.find('TodoAdd').prop('handleAddTodo')(demoTodos[0]);
            wrapper.find('TodoAdd').prop('handleAddTodo')(demoTodos[1]);
        })

        expect(wrapper.find('h1').text().trim()).toBe('To-do App');
        expect(localStorage.setItem).toHaveBeenCalledTimes(2);
    })

    test('should delete a task', () => {

        wrapper.find('TodoAdd').prop('handleAddTodo')(demoTodos[0]);
        wrapper.find('TodoList').prop('handleDelete')(demoTodos[0]);

        expect(wrapper.find('h1').text().trim()).toBe('To-do App');
    })
})
