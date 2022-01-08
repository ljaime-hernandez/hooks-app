import React, {useState} from 'react';
import './counter.css';

export const CounterApp = () => {

    // created a state object with several values for a following example which will modify just one of
    // them while keeping the rest of them with their current value
    const [state, setState] = useState({
        counter1: 10,
        counter2: 20,
        counter3: 30
    });

    // as the state is an object, i destructure it retrieving just some of its values for me to use them 
    // on the next component
    const {counter1, counter2} = state;

    return (
        <>
        {/* display of both variables retrieved from the state object*/}
          <h1>Counter 1 {counter1}</h1>
          <h1>Counter 2 {counter2}</h1>
          <hr/>
        {/* button will modify the value of only one of the variables in the state object*/}
          <button 
            className='btn btn-primary'
            onClick={() => {
                setState({
                    /*the spread operator will help us out to keep the previous values on the state
                    object as they where before modifying the counter1 variable, the counter1 value
                    is then passed by reference and modified with each click event and increments its
                    value by 1, being dynamically displayed in the h1 element, also displaying how the
                    counter2 variable in the state is unmuted as well*/
                    ...state,
                counter1: counter1 + 1
                })
            }}
          >
           counter 1 +1    
          </button>  
        </>
    )
}
