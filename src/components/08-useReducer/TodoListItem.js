import React from 'react'

export const TodoListItem = ({todo, index, handleDelete, handleToggle}) => {

    return (
        <li
            key={todo.id}
            className='list-group-item'
        >
            <p 
                 /*used a ternary operation for the element to change its class
                    to empty if the 'done' attribute of the task object is false,
                     but if true then it will set the class as 'complete', customized
                 in the styles.css file */
                className={`${todo.done && 'complete'}`}
                /*sends the id of the object as reference for the toggling of this element
                   to occur if the characteristics are met*/
                onClick={() => handleToggle(todo.id)}
            >
                {index + 1}. {todo.description}</p>
            <button
                className='btn btn-danger'
                value={todo.description}
                /*sends the id of the object as reference for the deleting of this element
                   to occur if the characteristics are met*/
                onClick={() => {handleDelete(todo.id)}}
            >
                Delete
            </button>
        </li>
    )
}
