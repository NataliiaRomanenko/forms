import React, {Component} from 'react';
import './login.css';
import {Redirect, Route, Switch} from "react-router";
import Modal from "../modal";
import {BrowserRouter as Router} from "react-router-dom";




class Login extends Component{
    constructor (props) {

        super(props);
        this.state = {
            modalWindow:false,
            message:undefined,
            username: undefined,
            pass:undefined,
            chkName: ["admin", "user"]
        };
    };
    sendLogin =(e) => {
        e.preventDefault();

    };
    handleChange =(evt)=> {
        this.setState({ [evt.target.name]: evt.target.value });
    };

    logOut = () => {
        this.setState({
            username: null,
            pass: null});
    };
    checkName = () => {
        this.setState({modalWindow: true});
        let username = this.state.username;
        if(username === "user") {
            this.setState({message: 'The access denied'});
        }
        if(username === "admin") {
            this.setState({message: 'The access granted'});
        }
   };
    hideModal = () => {
        //setTimeout(()=> this.setState({modalWindow: false}), 1000)
        this.setState({modalWindow: false});
    };
     render() {
        console.log("formState: ", this.state);
         if(this.state.username === null) {return <Redirect to='/home' />}
        return (
            <div className="blockWrapper">
                <form  onSubmit={this.sendLogin}>
                   <div className="container">
                       <div className="group">
                           <label htmlFor="username">Username</label>
                           <input type="text" name="username" required onChange={this.handleChange}/>
                           <span className="highlight"/>
                           <span className="bar"/>

                       </div>
                       <div className="group">
                           <label htmlFor="pass">Password</label>
                           <input type="password" name="pass" required onChange={this.handleChange}/>
                           <span className="highlight"/>
                           <span className="bar"/>

                       </div>
                    </div>
                   <div className="container buttonGroup">
                      <button type="submit" disabled={!this.state.chkName.includes(this.state.username) ? true : false} onClick={() => this.checkName()}>Action</button>
                      <button type="button" className="cancelbtn" onClick={()=> this.logOut()}>LogOut</button>

                   </div>
                </form>


                <Modal message={this.state.message}  userName={this.state.username} show={this.state.modalWindow} handleClose={this.hideModal}/>
            </div>
     )};
}

export default Login;