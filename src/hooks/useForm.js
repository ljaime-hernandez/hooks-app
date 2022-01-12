import { useState } from 'react';

// the useForm hook will receive a value but will have an empty object as its initial
// state, we create a function called handleInputChange which will return a value based 
// on the name of the input where we placed it, means that 
export const useForm = (initialState = {}) => {

    const [values, setValues] = useState(initialState);

    const reset = () => {
        setValues(initialState);
    }
    // the handleInputChange function will receive the values from the FormWithCustomHook 
    // component, the spread operator is used so the variables on it, either empty or not, 
    // remain the same while we receive the event (as this function is used in the 'onChange'
    // event) variable, as we already know the event will contain a target value, we destructure
    // it for easier readability, then we use the name of the input previously written on the
    // form and use it in our advantage to actually change the value on it, allowing us to
    // modify the value on the object from the FormWithCustomHook object as well, as it is passed
    // by reference
    const handleInputChange = ({target}) => {
        setValues({
            ...values,
            [target.name]: target.value
        });
    }
    return [values, handleInputChange, reset];
}
