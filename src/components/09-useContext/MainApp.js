import React, { useState } from 'react'
import { AppRouter } from './AppRouter'
import { UserContext } from './UserContext'

export const MainApp = () => {

   const [user, setUser] = useState({});

   // the useState is created just so we have a main source from where to retrieve
   // the main user information, given as well with the setUser function,
   // which both will be passed as arguments to our custom UserContext component.
   // The UserContext then will be the middle component from which the rest of the "Screen" 
   // components will retrieve the main user information for them to render, create or 
   // reset the user information, according to its description.
   // As shown below, for that to work we have to encapsulate the main AppRouter component 
   // with the context, as the context will be the "father" component containing the main 
   // information as described above.
    return (
            <UserContext.Provider value={{
                user: user,
                setUser,
            }}>
                <AppRouter/>
            </UserContext.Provider>
    )
}
