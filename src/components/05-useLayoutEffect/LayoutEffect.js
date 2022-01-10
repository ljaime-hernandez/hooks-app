import React, { useLayoutEffect, useRef, useState } from 'react';
import { useFetch } from '../../hooks/useFetch';
import { useCounter } from '../../hooks/useCounter';
import './layout.css';

export const LayoutEffect = () => {

    const {state: counter, increment} = useCounter(1);
    const {data} = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
    const {quote} = !!data && data[0];

    // we use this hook for it to have a reference on the p element contained in the blockquote
    const pTag = useRef();
    // we declare this setState for us to have an object which will contain all the values we can
    // see from our p component before and after it is being changed
    const [boxSize, setBoxSize] = useState({});

    // the useLayoutEffect works synchronously with the component, different to the useEffect which
    // work asynchronously, means the useLayoutEffect will execute before the component is rendered, 
    // the useEffect can only be executed when the component is rendered. In this scenario, we display
    // the boxSize object before and after the quote is being retrieved from the useFetch hook, so we 
    // can clearly see how the p element attributes changes with each new quote
    useLayoutEffect(() => {
        setBoxSize(pTag.current.getBoundingClientRect());
    }, [quote])

    return (
        <div>
            <h1>useLayoutEffect demo (detect size changes in p element)</h1>
            {/*ternary operation used with the help of the loading value retrieved from the useFetch hook,
                if the information dont exist, it will display a loading element as an alert, else if the data
                exists, it will display a blockquote with certain classes for better display */}

            <blockquote 
                className="blockquote text-end"
                ref={pTag}    
            >
                <p>{quote}</p>
            </blockquote>

            {/* we use this element to approriately render the information contained in the boxSize object*/}
            <pre>{JSON.stringify(boxSize, null, 3)}</pre>

            <button className='btn btn-primary' onClick={increment}>
                Change Quote
            </button>
        </div>
    )
}
