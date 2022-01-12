import React, { useContext } from 'react';
import { UserContext } from './UserContext';

export const HomeScreen = () => {

// i use the useContext hook which utilize the custom UserContext designed for us to
// have a "intermediary file" which will handle information used by all our components
// removing the need of a parent-child component communication. Instead, this and other
// components will communicate with the context to retrieve the information required to
// render or validate additional information.
const {user} = useContext(UserContext);

    return (
        <div>
            <h1>Home Screen</h1>

            <pre>
                {/*just a small render of the user information created on a different component
                    which has direct communication with the context as well */}
                {JSON.stringify(user, null, 4)}
            </pre>
        </div>
    )
}
