import React, { useEffect, useReducer } from 'react';
import {todoReducer} from './todoReducer';
import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';
import './styles.css';

// as this is an example of a useReducer hook, we can use the init for it to render previous information
// if available. For this component, we are using the localStorage from the browser, which saves the 
// information as strings, but if looked closely, the string is itself a JSON object, so we use the 
// JSON.parse method for it to use it as a json file
const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const TodoApp = () => {

    // the reducer here uses a custom hook created for us to be able to handle the addition, deletion and
    // toggling of a to-do list, it has an empty array as argument just in case theres nothing saved in the 
    // localStorage and the dispatch function will allow us to understand how the reducer is used
    const [todo, dispatch] = useReducer(todoReducer, [], init);

    // we will use this hook to render the to-do list every time we make changes to the useReducer object,
    // what the useEffect will do is to store the new object in the localStorage, on an item called 'todos'
    // and will transform our json object into a string, as the localStorage stores information as a string
    // and not as an object
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todo));
    }, [todo])

    // uses the dispatch function sending an object containing the delete string as action and the id for 
    // further identification
    const handleDelete = (todoId) => {
        const action = {
            type: 'delete',
            payload: todoId
        }

        dispatch(action);
    }

    // uses the dispatch function sending an object containing the toggle string as action and the id for 
    // further identification
    const handleToggle = (todoId) => {
        dispatch({
            type: 'toggle',
            payload: todoId
        })
    }

    // we send this function as reference, the logic behind adding a new object is located in the TodoAdd
    // file, this was an optimization done for the code to look cleaner
    const handleAddTodo = (newTodo) => {
        dispatch({
            type: 'add',
            payload: newTodo
        });
    }

    return (
        <div>
            <h1>To-do App </h1>
            <h3>Number of Tasks ({todo.length})</h3>

            {/*send the delete and toggle functions along with the entire list for further actions */}
            <div className='row'>
                <div className='col-7'>
                    <TodoList todo={todo} handleDelete={handleDelete} handleToggle={handleToggle}/>
                </div>
            {/* sends a reference of the add function for further actions*/}
                <div className='col-5'>
                    <TodoAdd handleAddTodo={handleAddTodo}/>
                </div>
            </div>
        </div>
    )
}
