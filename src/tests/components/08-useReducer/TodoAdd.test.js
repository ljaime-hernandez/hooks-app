import { shallow } from "enzyme";
import { TodoAdd } from "../../../components/08-useReducer/TodoAdd";

describe('tests on TodoAdd component', () => {

    const handleAddTodo = jest.fn();

    const wrapper = shallow(
        <TodoAdd
            handleAddTodo={handleAddTodo}
            />);

    test('should render properly', () => {
        
        expect(wrapper).toMatchSnapshot();
    });

    test('should not call the handleAddTodo', () => {
        
        // returns a function
        const formSubmit = wrapper.find('form').prop('onSubmit');
         
        formSubmit({preventDefault(){}});

        expect(handleAddTodo).toHaveBeenCalledTimes(0);
    })
    
    test('should call handleAddTodo Function', () => {
        
        const value = 'Learn Python';
        wrapper.find('input').simulate('change', {
            target: {
                value,
                name: 'description'
            }
        })

        const formSubmit = wrapper.find('form').prop('onSubmit');
        formSubmit({preventDefault(){}});

        expect(handleAddTodo).toHaveBeenCalledTimes(1);
        expect(handleAddTodo).toHaveBeenCalledWith(expect.any(Object));
        expect(handleAddTodo).toHaveBeenCalledWith({
            id: expect.any(Number),
            description: value,
            done: false
        });

        expect(wrapper.find('input').prop('value')).toBe('');
    })
})