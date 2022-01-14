import {renderHook, act} from '@testing-library/react-hooks';
import { useCounter } from '../../hooks/useCounter';

/* to run this test:
1. run the 'npm install' command from the hooks-app folder 
2. run the 'npm install --save-dev enzyme' command (if you havent done so)
3. run the 'npm install --save-dev enzyme-to-json' command (if you havent done so)
4. run the 'npm install --save-dev @wojtekmaj/enzyme-adapter-react-17 --legacy-peer-deps' command (if you are using React 17 as i do)
5. run the 'npm install --save-dev @testing-library/react-hooks' command (if you havent done so)
6. make sure the setupTests.js file include the enzyme, enzyme-to-json and the react adapter libraries
7. run the command 'npm run test'
8. to have a clearer view of this single js test file, press p. then type the file name 'useCounter.test.js'
*/

describe('Tests on useCounter hook', () => {

    test('should return default values', () => {
        
        // the renderHook method from the react-hooks library will
        // receive a callback from the hook in question, for us to retrieve
        // the properties on it, we got to refer to the 'current' property
        // contained in it. As shown below, each of the values retrieved from it
        // is being tested, from its default value to its 3 functions, which
        // i have been using repeatedly in this project
        const {result} = renderHook(() => useCounter());
        expect(result.current.state).toBe(10);
        expect(typeof result.current.increment).toBe('function');
        expect(typeof result.current.decrement).toBe('function');
        expect(typeof result.current.reset).toBe('function');
    })
    
    test('should return counter value of 100', () => {
        
        // the useCounter hook default value is 10, here i test if
        // it changes its "state" when i send an argument to it
        const {result} = renderHook(() => useCounter(100));
        const {increment} = result.current;
        
        // the act method from the react-hooks library will allow us to
        // emulate the destructured function from our hook, have in mind
        // that the same function CAN NOT be called twice within the same
        // act method, as the method its rendering the hook over and over,
        // instead of keeping its value persistently.
        act(() => {
            increment();
        });

        const {state} = result.current;
        expect(state).toBe(101);
    })

    test('should reset counter value to 50', () => {
        
        const {result} = renderHook(() => useCounter(50));
        const {increment, reset} = result.current;

        act(() => {
            increment();
        });

        act(() => {

            reset();
        });
        
        const {state} = result.current;
        expect(state).toBe(50);
    })

    test('should decrement counter value to 48', () => {
        
        const {result} = renderHook(() => useCounter(50));
        const {decrement} = result.current;

        act(() => {
            decrement();
        });
        
        const {state} = result.current;
        expect(state).toBe(49);
    })
})