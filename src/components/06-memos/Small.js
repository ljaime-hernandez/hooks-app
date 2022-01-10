import React, { memo } from 'react';

export const Small = memo(({value}) => {
    return (
        <small>{value}</small>
    )
});
