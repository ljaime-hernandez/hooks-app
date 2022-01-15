import { shallow } from "enzyme";
import { TodoAdd } from "../../../components/08-useReducer/TodoAdd";

/* to run this test:
1. run the 'npm install' command from the hooks-app folder 
2. run the 'npm install --save-dev enzyme' command (if you havent done so)
3. run the 'npm install --save-dev enzyme-to-json' command (if you havent done so)
4. run the 'npm install --save-dev @wojtekmaj/enzyme-adapter-react-17 --legacy-peer-deps' command (if you are using React 17 as i do)
5. run the 'npm install --save-dev @testing-library/react-hooks' command (if you havent done so)
6. make sure the setupTests.js file include the enzyme, enzyme-to-json and the react adapter libraries
7. run the command 'npm run test'
8. to have a clearer view of this single js test file, press p. then type the file name 'TodoAdd.test.js'
*/

describe('tests on TodoAdd component', () => {

    // as done previously in other tests, we need a function mock which is necessary for the component
    // to render itself, so we simulate an argument being sent when its just an empty function
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

        // as the handleSubmit function is declared in the component itself
        // it is going to work under the parameters written on it. If seen
        // closely on its component, we will identify an if statement which will prevent
        // it from rendering or saving any information if the value entered is no 
        // longer than 2 characters, as we just called the function without any parameter
        // then the handleAddTodo function contained should have not been called and thats
        // whats being evaluated
        expect(handleAddTodo).toHaveBeenCalledTimes(0);
    })
    
    test('should call handleAddTodo Function', () => {
        
        const value = 'Learn Python';

        // the onSubmit function works retrieving the information contained in the input
        // which is also called with a onChange function, the name of the input is
        // simulated to be 'description' as in this example, and the value is meant 
        // to be the user input itself, after the information has been implemented with the
        // simulation then we can call the onSubmit function exactly as we did on the previous test
        wrapper.find('input').simulate('change', {
            target: {
                value,
                name: 'description'
            }
        })

        const formSubmit = wrapper.find('form').prop('onSubmit');
        formSubmit({preventDefault(){}});

        // as the onSubmit method contain the proper arguments this time, the mock function contained
        // on it (handleAddTodo) should have been called once, passing the parameters given in the
        // onChange simulation, we can also test the object passed to it as demonstrated below, versus
        // the new created object in the actual component.
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