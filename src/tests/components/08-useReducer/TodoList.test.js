import { shallow } from "enzyme";
import { TodoList } from "../../../components/08-useReducer/TodoList";
import { demoTodos } from "../../fixtures/demoTodos";

describe('Tests on TodoList component', () => {

    
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
        
        expect(wrapper.find('TodoListItem').length).toBe(demoTodos.length);
        expect(wrapper.find('TodoListItem').at(0).prop('handleDelete')).toEqual(expect.any(Function));
    });
    
})