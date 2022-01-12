import React from 'react'
import { useForm } from '../../hooks/useForm'

export const TodoAdd = ({handleAddTodo}) => {

    // the useForm with an empty string helps us to reset the form input box
    const [{description}, handleInputChange, reset] =  useForm({
        description: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        if(description.trim().length <= 1){
            return;
        }

        // adds a Date and time to the id property for the code to create a unique
        // number, the description will be set as the value entered in the input
        // box and the done value is set as false as this is a to-do list which
        // will have a visual toggle effect for whenever the task is done
        const newTodo = {
            id: new Date().getTime(),
            description: description,
            done: false
        };

        // we send the new object to the handleAddTodo function returned in this component
        // as a reference for us to include the adding logic in here instead on the previous
        // component, for optimization purposes
        handleAddTodo(newTodo);
        reset();
    }

    return (
        <>
        <h4>Add task</h4>
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="description"
                className="form-control"
                placeholder="Add new task"
                autoComplete="off"
                value={description}
                onChange={handleInputChange}
            />
            <button
                type="submit"
                className='btn btn-outline-primary mt-1 col-12'
            >
                Add
            </button>
        </form>
        </>
    )
}
