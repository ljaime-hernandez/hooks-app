import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import { LogoutScreen } from "./LogoutScreen";
import { HomeScreen } from "./HomeScreen";
import { LoginScreen } from "./LoginScreen";
import { NavBar } from "./NavBar";

// on this component i demonstrate how a Router component (exported through the installation of a 
// react-router-dom dependency) works and how it allow us to, in this case, do a small demo for a 
// SPA (Single Page Application).
// The NavBar is a custom nav component which will include links to our different components and
// additional features explained on it
// The Routes component is an export brought from the react-route-dom dependency, which will allow
// us to handle the different routes contained in this folder, separated on different components
// The Route component is also an export from react-route-dom, used solely to handle the path leading
// towards single components, each route will render an specific component described on its element
// attribute, but i also created an additional route (the last one) which will handle any additional
// route written by the user which does not lead to any of the components created on this context.
export const AppRouter = () => {
    return (
        <Router>
            <div>
                <NavBar/>
                <Routes>
                    <Route  path="/" element={<HomeScreen/>}/>
                    <Route  path="/logout" element={<LogoutScreen/>}/>
                    <Route  path="/login" element={<LoginScreen/>}/>
                    <Route  path="*" element={<Navigate replace to="/" />} />    

                </Routes>
            </div>
        </Router>
    )
}
