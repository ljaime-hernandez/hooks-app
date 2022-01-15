import { act } from "@testing-library/react";
import { shallow, mount } from "enzyme";
import { TodoApp } from "../../../components/08-useReducer/TodoApp";
import { demoTodos } from "../../fixtures/demoTodos";

/* to run this test:
1. run the 'npm install' command from the hooks-app folder 
2. run the 'npm install --save-dev enzyme' command (if you havent done so)
3. run the 'npm install --save-dev enzyme-to-json' command (if you havent done so)
4. run the 'npm install --save-dev @wojtekmaj/enzyme-adapter-react-17 --legacy-peer-deps' command (if you are using React 17 as i do)
5. run the 'npm install --save-dev @testing-library/react-hooks' command (if you havent done so)
6. make sure the setupTests.js file include the enzyme, enzyme-to-json and the react adapter libraries
7. run the command 'npm run test'
8. to have a clearer view of this single js test file, press p. then type the file name 'TodoApp.test.js'
*/

describe('Tests on TodoApp component', () => {
    
    const wrapper = shallow(<TodoApp/>);

    // this component uses the localStorage of the browser to retain information from the user,
    // that information is sent then to a container called with the setItem method, we need to
    // simulate the functionality so we once again use the jest.fn mock function
    Storage.prototype.setItem = jest.fn(() => {});

    test('should render properly', () => {
        
        expect(wrapper).toMatchSnapshot();
    });
    
    test('should add a task', () => {
        
        // we use the mount enzyme method instead of the shallow as we need to render the 
        // components inside the TodoApp component, if not it would just render the elements
        // contained in it, but not the custom components implemented on its return
        const wrapper = mount(<TodoApp/>);

        // the act method will simulate a function occurring on its contained component, 
        // the demoTodos is going to be an array returning 2 objects with similar values as the 
        // ones used on the actual component, so we use them as tests
        act(() => {
            wrapper.find('TodoAdd').prop('handleAddTodo')(demoTodos[0]);
            wrapper.find('TodoAdd').prop('handleAddTodo')(demoTodos[1]);
        })

        // small test for the text included on the main header
        expect(wrapper.find('h1').text().trim()).toBe('To-do App');
        // as the TodoAdd component was called twice because of the 2 objects pretending to
        // be added on the with the TodoAdd component, then the localStorage should have
        // been called twice
        expect(localStorage.setItem).toHaveBeenCalledTimes(2);
    });

    test('should delete a task', () => {

        // same tests as the previous ones but adding and deleting an object consecutively
        wrapper.find('TodoAdd').prop('handleAddTodo')(demoTodos[0]);
        wrapper.find('TodoList').prop('handleDelete')(demoTodos[0]);

        expect(wrapper.find('h1').text().trim()).toBe('To-do App');
    });
})
