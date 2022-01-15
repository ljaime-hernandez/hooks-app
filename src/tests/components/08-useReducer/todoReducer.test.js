import {todoReducer} from '../../../components/08-useReducer/todoReducer';
import { demoTodos } from '../../fixtures/demoTodos';

/* to run this test:
1. run the 'npm install' command from the hooks-app folder 
2. run the 'npm install --save-dev enzyme' command (if you havent done so)
3. run the 'npm install --save-dev enzyme-to-json' command (if you havent done so)
4. run the 'npm install --save-dev @wojtekmaj/enzyme-adapter-react-17 --legacy-peer-deps' command (if you are using React 17 as i do)
5. run the 'npm install --save-dev @testing-library/react-hooks' command (if you havent done so)
6. make sure the setupTests.js file include the enzyme, enzyme-to-json and the react adapter libraries
7. run the command 'npm run test'
8. to have a clearer view of this single js test file, press p. then type the file name 'todoReducer.test.js'
*/

describe('Tests on todoReducer', () => {

    test('should return default state', () => {
       
       const state = todoReducer(demoTodos, {});

       expect(state).toEqual(demoTodos);
    });
    
    test('should add a todo', () => {

        const action = {
            type: 'add',
            payload: demoTodos[1]
        }

        // the demoTodos array should return 2 objects contained which can be checked in
        // the fixtures folder, additional to it we use the reducer to receive an action,
        // this action will contain an argument containing an object with a new task which
        // will be added to the demoTodos array, by using the 'add' type as shown above
        const state = todoReducer(demoTodos, action);

       console.log(state);
       expect(state.length).toBe(3);
       expect(state).toEqual([...demoTodos, demoTodos[1]])
    })

    test('should delete a todo', () => {

        const action = {
            type: 'delete',
            payload: demoTodos[1]
        }

        // same information as in the previous test, this time it should return only 2
        // objects on the state, as i used the same element in the array for it to first be duplicated
        // in the first test and for it to be deleted on this one
        const state = todoReducer(demoTodos, action);

        console.log(state);
        expect(state.length).toBe(2);
    });

    test('should toggle a todo', () => {

        const action = {
            type: 'toggle',
            payload: 1
        }

        const state = todoReducer(demoTodos, action);

        // the toggle action receives an id instead of a full object, the switch
        // inside the reducer contains a function which will look for the object
        // containing that id and will change one of the values on its 'done' attribute
        // from true to false, as it is a boolean
        console.log(state[0]);
        expect(state[0].done).toBe(true);
    })
})