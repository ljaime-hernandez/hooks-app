import {createContext} from 'react';

// higher-order component where the "Screen" components will
// exchange information about the user created in the MainApp, further
// explanation of the context can be found in each component
export const UserContext = createContext(null);