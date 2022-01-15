import { shallow } from "enzyme";
import { TodoList } from "../../../components/08-useReducer/TodoList";
import { demoTodos } from "../../fixtures/demoTodos";

/* to run this test:
1. run the 'npm install' command from the hooks-app folder 
2. run the 'npm install --save-dev enzyme' command (if you havent done so)
3. run the 'npm install --save-dev enzyme-to-json' command (if you havent done so)
4. run the 'npm install --save-dev @wojtekmaj/enzyme-adapter-react-17 --legacy-peer-deps' command (if you are using React 17 as i do)
5. run the 'npm install --save-dev @testing-library/react-hooks' command (if you havent done so)
6. make sure the setupTests.js file include the enzyme, enzyme-to-json and the react adapter libraries
7. run the command 'npm run test'
8. to have a clearer view of this single js test file, press p. then type the file name 'TodoList.test.js'
*/

describe('Tests on TodoList component', () => {

    // The TodoList component will work almost as an intermediary between the TodoApp and the TodoListItem.
    // As shown below, the same methods sent from its parent component will be sent again to the next child
    // component, so we once again use mocks for the component to render without errors
    let handleDelete = jest.fn();
    let handleToggle = jest.fn();
    let wrapper = shallow(
        <TodoList
            todo={demoTodos}
            handleToggle={handleToggle}
            handleDelete={handleDelete}
        />);

    test('should render correctly', () => {
        
        expect(wrapper).toMatchSnapshot();
    });

    test('should contain two TodoListItem', () => {
        
        // the TodoList component will iterate repeating a child component call depending
        // on how many objects were sent on the previous parent component array, so it
        // should match with the array size
        expect(wrapper.find('TodoListItem').length).toBe(demoTodos.length);
        // testing on one of the iterations just so we know if the child component
        // is receiving a function type on its arguments
        expect(wrapper.find('TodoListItem').at(0).prop('handleDelete')).toEqual(expect.any(Function));
    });
    
})