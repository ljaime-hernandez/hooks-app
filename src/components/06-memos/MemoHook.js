import React, { useMemo, useState } from 'react';
import '../02-useEffect/effects.css'
import { useCounter } from '../../hooks/useCounter';
import { IterationsExecuted } from '../../helpers/iterationsExecuted';

export const MemoHook = () => {

    // we reutilize useCounter from our hooks folder
    const {state: counter, increment} = useCounter(10);
    const [show, setShow]= useState(true);

    // we use the useMemo hook with a counter dependency ([counter]), it will allow us to
    // call the IterationsExecuted helper used to display a number the amount of counter 
    // number we have, and will only be launched again when the counter is modified. This 
    // will allow us to avoid a relaunch of the IterationsExecuted helper whenever any other 
    // element on the component is rendered again, but only when the counter is changed and 
    // nothing else
    const memoIterationsExecuted = useMemo(() => IterationsExecuted(counter), [counter])

    return (
        <div>
            <h1>useMemo demo</h1>
            <h3>Counter: <small>{counter}</small></h3>
            <hr/>

            <p>{memoIterationsExecuted}</p>

            <button
                className='btn btn-primary me-3'
                onClick={increment}
            >
             + 1
            </button>

            <button
                className='btn btn-outline-primary ml-3'
                onClick={() => {
                    setShow(!show);
                }}
            >
                Show/Hide {JSON.stringify(show)}
            </button>
        </div>
    )
}
