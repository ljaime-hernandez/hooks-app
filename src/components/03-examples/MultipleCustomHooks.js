import React from 'react';
import { useFetch } from '../../hooks/useFetch';
import { useCounter } from '../../hooks/useCounter';
import '../02-useEffect/effects.css';

export const MultipleCustomHooks = () => {

    // custom hook used for other components but using a different number as argument, in this
    // component we will need just both the value and the increment function from it. The increment
    // function is used on the button rendered on this component in a click event which will increase the
    // counter by one, changing the state on the useFetch, which will therefore make a new fetch request
    const {state: counter, increment} = useCounter(1);
    // the counter in the url is modified with a button, which will be used as the id required
    // for use to retrieve the data from the page
    const {loading, data} = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
    // the following syntax is used so we dont have an 'undefined' data to be checked before
    // we render its information into the component, but its going to confirm if either the data exist
    // or not, the operator !! will return either a true or a false. Also, similar to a ternary operation,
    // depending if the condition is true, then we will destructure both the quote and the author
    // (previously confirmed with the help of Postman) retrieved from the first index of an array, 
    // as the information returned is an object contained on an array, if confirmed with a console.log,
    // the web console displays a [{...}], pushing us to retrieve the information of the data array by index.
    const {author, quote} = !!data && data[0];

    return (
        <div>
            <h1>Multiple custom hooks demo (Breaking Bad Quotes API)</h1>
            {/*ternary operation used with the help of the loading value retrieved from the useFetch hook,
                if the information dont exist, it will display a loading element as an alert, else if the data
                exists, it will display a blockquote with certain classes for better display */}
            {
                loading
                ?
                    (
                        <div className='alert alert-info text-center'>
                            Loading...
                        </div>
                    )
                :
                    (
                        <blockquote className="blockquote text-end">
                            <p className="quote">{quote}</p>
                            <figcaption className="blockquote-footer">{author}</figcaption>
                        </blockquote>
                    )
            }

            <button className='btn btn-primary' onClick={increment}>
                Change Quote
            </button>
        </div>
    )
}
