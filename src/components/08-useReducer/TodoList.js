import React from 'react'
import { TodoListItem } from './TodoListItem'

export const TodoList = ({todo, handleDelete, handleToggle}) => {

    return (
        <ul className='list-group list-group-flush'>
                {

                    /*we retrieve the whole list of objects called todo and use a custom component
                        for it to render each piece of information accordingly, we also use the 
                        map method with an index argument which we use to enlist each task, and we
                        also pass the delete and toggle functions as reference */
                    todo.map ((todo, i) => (
                        <TodoListItem 
                            key={todo.id}
                            todo={todo}
                            index={i} 
                            handleDelete={handleDelete} 
                            handleToggle={handleToggle} />
                    ))
                }
        </ul>
    )
}
