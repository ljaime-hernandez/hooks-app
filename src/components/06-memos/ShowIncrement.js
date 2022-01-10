import React, { memo } from 'react';

// the component will receive a function which will be triggered 
// on a click event, this function is a call back scripted in the previous component,
// the argument then is added in this component but the function will use it
// in the callback, as it is a function saved in memory which will
// avoid unnecesary memory usage
export const ShowIncrement = memo(({increment}) => {
    return (
        <button
            className='btn btn-primary'
            onClick={() => {
                increment(5);
            }}
        >
            + 1
        </button>
    )
})
