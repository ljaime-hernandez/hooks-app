import React from 'react';
import { useForm } from '../../hooks/useForm';
import './effects.css';

export const FormWithCustomHook = () => {

    // i use a custom hook located in the hooks folder which will use the onChange event
    // to modify each of the values in the formState based on the input name
    const [formState, handleInputChange] = useForm({
        name: '',
        email: '',
        password: ''
    });
    
    // destructure of each attribute in the formstate for easier modification in the
    // input value
    const {name, email, password} = formState;

    // small test for us to visualize the formState values after a normal submission 
    // with the onSubmit function
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formState);
    }

    return (
        <form className='form-group mb-10' onSubmit={handleSubmit}>
          <h1>Form With custom hook (submit to see values on the console)</h1>  

          <div className='form-group mb-1'>
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

          <div className='form-group mb-1'>
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

          <div className='form-group mb-1'>
              <input
                type="password"
                name="password"
                className="form-control"
                placeholder="Your password"
                autoComplete="off"
                value={password}
                onChange={handleInputChange}
                />
          </div>

          <button type='submit' className='btn btn-primary'>Submit Form</button>
        </form>
    )
}
