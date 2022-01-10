import React from 'react';
import { useCounter } from '../../hooks/useCounter';
import './counter.css';

export const CounterWithCustomHook = () => {

    // created a custom hook located in the hooks folder which contains different functions on it,
    // it receives a number as an initial argument which we are able to modify using different functions.
    // we destructure the object retrieved from the useCounter function for us to use it in this component
    const {state, increment, decrement, reset} = useCounter(100);

    return (
        <>
          <h1>useState demo with custom hook</h1>
          <h3>Counter: {state}</h3>
          {/*as the increment function needs an argument, we need to create a basic arrow function in here for it
             to work, if we were to use the function as the reset one (which does not need an argument), the compiler
             would send an error, even when it has a default value on its argument as seen from the useCounter file, the
             same applies to the decrement function */}
          <button onClick={() => increment(1)} className='btn btn-primary me-3'>+ 1</button>  
          <button onClick={() => decrement(1)} className='btn btn-primary me-3'>- 1</button>
          <button onClick={reset} className='btn btn-primary'>reset</button>

        </>
    )
}
