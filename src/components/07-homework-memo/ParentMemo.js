import { useCallback, useState } from 'react';
import { ChildMemo } from './ChildMemo';
import '../02-useEffect/effects.css';

// simple component exclusively created to test my knowledge in useCallback and memo
export const ParentMemo = () => {

    const nums = [2,4,6,8,10];
    const [value, setValue] = useState(0);

    const increment = useCallback(
        ( num ) => {
        setValue( v => v + num )
    }, [setValue])


    return (
        <div>
            <h1>ParentMemo</h1>
            <p> Total: { value } </p>

            <hr />

            {
                nums.map( n => (
                    <ChildMemo 
                        key={ n }
                        num={ n }
                        increment={ increment }
                    />
                ))
            }
        </div>
    )
}
