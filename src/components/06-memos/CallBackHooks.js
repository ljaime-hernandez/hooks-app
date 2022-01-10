import React, { useCallback, useState } from 'react';
import '../02-useEffect/effects.css';
import { ShowIncrement } from './ShowIncrement';

export const CallBackHooks = () => {

    // default value set to 10
    const [counter, setCounter] = useState(10);

    // the useCallback hook will keep the function used on it in memory
    // means that the function wont render over and over, allowing us to
    // reduce the memory usage and the execution of the function over and
    // over again.
    // As seen, the argument on the setCounter is not the counter from the
    // useState, but it is an argument with a different which the program will
    // assume as the variable contained in it.
    // finally, we will add an argument on the callback which will work as an 
    // argument whenever the increment variable is called, we can use this argument
    // as any other one from a normal function to make any sort of operations
    const increment = useCallback((num) => {
        setCounter(count => count + num);
    }, [setCounter])

    return (
        <div>
            <h1>useCallback demo</h1>
            <h3>Counter: {counter}</h3>
            <ShowIncrement increment={increment}/>
        </div>
    )
}
