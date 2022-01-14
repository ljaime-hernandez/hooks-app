import {todoReducer} from '../../../components/08-useReducer/todoReducer';
import { demoTodos } from '../../fixtures/demoTodos';

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

        console.log(state[0]);
        expect(state[0].done).toBe(true);
    })
})