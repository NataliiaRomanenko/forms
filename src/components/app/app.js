import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import './app.css';
import Login from "../login";
import Home from "../home";
import CreateUser from "../create-users";



const App = () => {
    return (
        <div className="app">
            <Router>
               <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/home" render={ () => <Home/>}/>
                    <Route path="/login" render={ () => <Login/>}/>
                    <Route path="/create_users" render={ () => <CreateUser/>}/>
                </Switch>
            </Router>
        </div>
    )
};
export default App;