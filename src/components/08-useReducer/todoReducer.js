export const todoReducer = (state = [], action) => {

    // custom reducer with specific cases arranged in the previous components
    // for the actions to work accordingly. The add type will simply include
    // a new object in the present array of tasks, the delete will return a
    // new array without including the object containing the id calling that
    // function and the toggle will modify one attribute of the task, which is
    // a boolean, from true to false and viceversa 
    switch (action.type) {
        case 'add':
            return [...state, action.payload];
        case 'delete':
            return state.filter(todo => todo.id !== action.payload);
        case 'toggle': 
            return state.map(todo => 
                (todo.id === action.payload)
                ? {...todo, done: !todo.done}
                : todo
                );
            // case 'toggle-old':
            // return state.map(todo => {
            //     if(todo.id === action.payload){
            //         return {
            //             ...todo,
            //             done: !todo.done}
            //         } else {
            //             return todo;
            //         }
            //     }
        default:
            return state;
    }
}