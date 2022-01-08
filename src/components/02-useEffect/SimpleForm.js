import React, { useEffect, useState } from 'react';
import './effects.css';

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        name: '',
        email: ''
    });

    const {name, email} = formState;
    
    // the useEffect will always launch itself by default if any change is done to
    // its component, therefore we need it to stop from doing so as even if we type a 
    // character it will relaunch, for us to avoid that, 
    useEffect(() => {
        console.log('hey');
    }, [])

    // this function is used in the onChange event, therefore we will receive an
    // object with the event values, instead of writing e.something, im destructuring its
    // target value 
    const handleInputChange = ({target}) =>{

        setFormState({
            ...formState,
            [target.name]: target.value
        })
    }

    return (
        <>
          <h1>useEffect</h1>  
          <hr/>

          <div className='form-group'>
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Your name"
                autoComplete="off"
                value={name}
                onChange={handleInputChange}
                />
          </div>

          <div className='form-group'>
              <input
                type="text"
                name="email"
                className="form-control"
                placeholder="Your email"
                autoComplete="off"
                value={email}
                onChange={handleInputChange}
                />
          </div>
        </>
    )
}
