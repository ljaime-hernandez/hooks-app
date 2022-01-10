import { memo } from 'react';

export const ChildMemo = memo(({ num, increment }) => {

    console.log('  Component generated  ');

    return (
        <button
            className="btn btn-primary me-2"
            onClick={ () => increment( num ) }
        >
            { num }
        </button>
    )
})
