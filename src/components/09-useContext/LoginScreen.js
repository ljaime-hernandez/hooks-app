import React, { useContext } from 'react';
import { UserContext } from './UserContext';

export const LoginScreen = () => {

    const {setUser} = useContext(UserContext);
    // the component below will use the destructured context value, which in this case
    // is a setState function for us to set a default user value, it will be rendered in
    // both the HomeScreen and the LogoutScreen components
    return (
        <div>
            <h1>Login Screen</h1>
            <button
                className='btn btn-primary'
                onClick={() => setUser({
                    id: new Date().getTime(),
                    name: 'Miguel'
                })}
            >
                Create user
            </button>
        </div>
    )
}
