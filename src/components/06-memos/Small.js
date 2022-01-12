import React, { memo } from 'react';

// when the value in this function remains the same, then the memo method will
// help us to stop rendering it to avoid extra memory usage, if the memo were not
// to be used in the function, its elements would be mounted and dismounted every
// time theres a change on any of its references
export const Small = memo(({value}) => {
    return (
        <small>{value}</small>
    )
});
