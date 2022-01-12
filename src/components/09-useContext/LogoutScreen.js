import React, { useContext } from 'react';
import { UserContext } from './UserContext';

export const LogoutScreen = () => {

    const {user, setUser} = useContext(UserContext);
    
    // same as in the LoginScreen component, the context values are destructured
    // in this case i mix both the HomeScreen Rendering and the setUser function 
    // to both render the user information and change the user values to an empty
    // state, just as a small demonstration on how to "reset" the information
    // in the whole context 
    const handleClick = () => {
        setUser({});
    }

    return (
        <div>
            <h1>Logout Screen</h1>
            <pre>
                {JSON.stringify(user, null, 4)}
            </pre>
            <button
                className='btn btn-warning'
                onClick={handleClick}
            >
                Logout
            </button>
        </div>
    )
}
