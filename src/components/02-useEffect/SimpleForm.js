import React, { useEffect, useState } from 'react';
import './effects.css';
import { Message } from './Message';

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
        // console.log('hey');
    }, [])
    // useEffect called when the SimpleForm component is rendered, will launch itself again
    // only when any variable related to the formState is called
    useEffect(() => {
        // console.log('formState modified');
    }, [formState])

    // useEffect called only when the email portion of the form is modified
    useEffect(() => {
        // console.log('email value of the formState object modified');
    }, [email])

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

          {/* the condition will allow the Message component to be launched only when the name input in the
              form is equal to '123'*/}
          {(name === '123') && <Message/>}
        </>
    )
}
