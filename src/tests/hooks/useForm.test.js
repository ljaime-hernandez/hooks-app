import {renderHook, act} from '@testing-library/react-hooks';
import { useForm } from "../../hooks/useForm";

/* to run this test:
1. run the 'npm install' command from the hooks-app folder 
2. run the 'npm install --save-dev enzyme' command (if you havent done so)
3. run the 'npm install --save-dev enzyme-to-json' command (if you havent done so)
4. run the 'npm install --save-dev @wojtekmaj/enzyme-adapter-react-17 --legacy-peer-deps' command (if you are using React 17 as i do)
5. run the 'npm install --save-dev @testing-library/react-hooks' command (if you havent done so)
6. make sure the setupTests.js file include the enzyme, enzyme-to-json and the react adapter libraries
7. run the command 'npm run test'
8. to have a clearer view of this single js test file, press p. then type the file name 'useForm.test.js'
*/

describe('Tests on useForm custom hook', () => {

    const user = {
        name: 'description',
        value: 'Learn React'
    }

    test('should return a form by default', () => {
        
        // we destructure the result value returned from the renderHook method, using the useForm
        // hook with a dummy user initial state. As the useForm returns an array we have to assign
        // its values as shown below.
        // in this case im testing all the values contained on the form and for them to be the right
        // type
        const {result} = renderHook(() => useForm(user));
        const [values, handleInputChange, reset] = result.current;
        expect(values).toEqual(user);
        expect(typeof handleInputChange).toBe('function');
        expect(typeof reset).toBe('function');
    });

    test('should change the form name value', () => {

        const {result} = renderHook(() => useForm(user));
        const [ , handleInputChange] = result.current;

        // We use the act method from the react-hooks library for us to use the function returned.
        // The handleInputChange is a function which receives an event value, so we have to emulate
        // it accordingly, we create a target object containing the name and value variables, as
        // the form tested has an input for name, i use it as a reference on the name value and the
        // value of the input would be 'Miguel', so it should return the respective object.
        act(() => {
            handleInputChange({target: {name: 'name', value: 'Miguel'}});
        });

        // after the act method is used we can evaluate with a console log or a 'toEqual' method 
        // which would confirm the function being called
        const [values] = result.current;
        expect(values).toEqual({...user, name: 'Miguel'});
    });
    
    test('should reset form input', () => {

        const {result} = renderHook(() => useForm(user));
        const [ , handleInputChange, reset] = result.current;

        act(() => {
            handleInputChange({target: {name: 'name', value: 'Miguel'}});
            reset();
        });

        const [values] = result.current;
        expect(values).toEqual(user);
    })
})