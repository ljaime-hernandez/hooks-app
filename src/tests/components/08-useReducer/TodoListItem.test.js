import { TodoListItem } from "../../../components/08-useReducer/TodoListItem";
import { demoTodos } from "../../fixtures/demoTodos";
import { shallow } from "enzyme";

describe('Tests on TodoItemList component', () => {

    let handleDelete = jest.fn();
    let handleToggle = jest.fn();
    const index = 1;
    let wrapper = shallow(
            <TodoListItem
                todo={demoTodos[1]}
                index={index}
                handleToggle={handleToggle}
                handleDelete={handleDelete} />)

    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow(
            <TodoListItem
                todo={demoTodos[1]}
                index={index}
                handleToggle={handleToggle}
                handleDelete={handleDelete} />);
    });

        test('should render properly', () => {
            
            expect(wrapper).toMatchSnapshot();
        });

         test('should call handleDelete function', () => {

            wrapper.find('button').simulate('click');
            expect(handleDelete).toHaveBeenCalled();
            expect(handleDelete).toHaveBeenCalledWith(demoTodos[1].id);
        });
        
         test('should call handleToggle function', () => {
            
            wrapper.find('p').simulate('click');
            expect(handleToggle).toHaveBeenCalled();
            expect(handleToggle).toHaveBeenCalledWith(demoTodos[1].id);
        });

        test('should show text correctly', () => {
            
            expect(wrapper.find('p').text().trim()).toBe(`${demoTodos[1].id}. ${demoTodos[1].description}`);
        });

        test('should show class complete on p element if the done value is true', () => {
            
            const todo = demoTodos[0];
            todo.done = true;

            wrapper = shallow(
                <TodoListItem
                    todo={todo}
                />);

            expect(wrapper.find('p').hasClass('complete')).toBe(true);
        });


})
