import React, { useState } from 'react';
import '../02-useEffect/effects.css';
import { MultipleCustomHooks } from '../03-examples/MultipleCustomHooks';

export const RefExample = () => {

    const [show, setShow] = useState(false);

    return (
        <div>
            <h1>Ref Example</h1>
            <hr/>

            {show && <MultipleCustomHooks/>}

            <button 
                className='btn btn-primary mt-5'
                onClick={ () => {
                    setShow(!show)
                } }   
            >
                Show/Hide Quotes
            </button>
        </div>
    )
}
