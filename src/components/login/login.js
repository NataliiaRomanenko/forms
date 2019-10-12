import React, {Component} from 'react';
import './login.css';
import {Redirect} from "react-router";
import Modal from "../modal";



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
        this.setState({modalWindow: false});
    };
     render() {
        console.log("formState: ", this.state);
         if(this.state.username === null) {return <Redirect to='/home' />};
        return (
            <div className="blockWrapper">
                <form  onSubmit={this.sendLogin}>
                   <div className="container">
                        <label htmlFor="username"><b>Username</b></label>
                        <input type="text" placeholder="Enter Username" name="username" required onChange={this.handleChange}/>
                        <label htmlFor="pass"><b>Password</b></label>
                        <input type="password" placeholder="Enter Password" name="pass" required onChange={this.handleChange}/>
                    </div>
                   <div className="container buttonGroup">
                      <button type="submit" disabled={!this.state.chkName.includes(this.state.username) ? true : false} data-loading-text="Login..." onClick={() => this.checkName()}>Action</button>
                      <button type="button" className="cancelbtn" onClick={()=> this.logOut()}>LogOut</button>

                   </div>
                </form>
                <Modal message={this.state.message} show={this.state.modalWindow} handleClose={this.hideModal}/>
            </div>
     )};
}

export default Login;