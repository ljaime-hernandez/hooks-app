import React, { useState } from 'react';
import '../02-useEffect/effects.css'
import { useCounter } from '../../hooks/useCounter';
import { Small } from './Small';

export const Memorize = () => {

    const {state: counter, increment} = useCounter(10);
    const [show, setShow]= useState(true);

    return (
        <div>
            <h1>React memo demo</h1>
            <h3>Counter: <Small value={counter}/></h3>

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
