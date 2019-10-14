import React, {Component} from 'react';
import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import './app.css';
import Login from "../login";
import Home from "../home";
import CreateUser from "../create-users";
import Actions from "../actions";



class App extends Component {
    constructor (props) {
        super(props);
        this.state = {
            username: undefined,
            users:[
                {username: 'admin', isAdmin:true},
                {username: 'user', isAdmin:false},
            ],
        };
    };
    //Check ? LogIn
    isLoggedIn() {
        if (!this.state.username) {return false}
        else {return true}
    }
    //Check ? Admin
    isAdministrator() {
        if(!this.state.username) return false;
        return this.state.users.find(itm => itm.username === this.state.username).isAdmin;
    }
    componentDidMount() {
        const { users} = this.state;
        localStorage.setItem('users', users);
    }
    sendLogin =(e) => {
        e.preventDefault();

    };

    handleChange =(evt)=> {
        this.setState({ [evt.target.name]: evt.target.value });
    };

    logOut = () => {
        this.setState({
            username: undefined});
    };



    addNewUser = (user) => {
        this.setState({users:[...this.state.users,user]});
    }

    render(){
        console.log(this.state.users);
        return (
            <div className="app">
                <Router>
                    <Switch>
                        <Route exact path="/" render ={()=> <Home/>}/>
                        <Route path="/home" render ={()=> <Home/>}/>
                        <Route path="/login" render ={()=> <Login
                            username = {this.state.username}
                            sendLogin = {this.sendLogin}
                            logOut = {this.logOut}
                            handleChange = {this.handleChange} />}/>

                        <Route path="/actions" render ={()=> <Actions
                            username = {this.state.username}
                            logOut = {this.logOut} />}/>

                        <Route path="/create_users" render = { () => this.isAdministrator() ? <CreateUser
                            addNewUser = {this.addNewUser}
                            handleChange = {this.handleChange}
                            newUsers = {this.state.users}
                          /> : <Home/>}/>
                        {/*<Route path="*" render={() => 'We are sorry but the page you are looking for does not exist.'} />*/}
                    </Switch>
                </Router>
            </div>
        )
    }

};
export default App;