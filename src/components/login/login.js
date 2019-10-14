import React, {Component} from 'react';
import './login.css';
import {Link, NavLink, Redirect} from "react-router-dom";



class Login extends Component{
     render() {
        const{sendLogin, logOut, handleChange} = this.props;

        return (
            <div className="blockWrapper">
                <form  className='form' onSubmit={sendLogin}>
                   <div className="container">
                       <div className="group">
                           <label htmlFor="username">Username</label>
                           <input type="text" name="username" required onChange={handleChange}/>
                           <span className="highlight"/>
                           <span className="bar"/>
                       </div>

                    </div>
                   <div className="container buttonGroup">
                       <button type="submit" onClick={sendLogin}><NavLink to={'/actions'}>LogIn</NavLink></button>
                       <button type="button" className="cancelbtn" >
                           <Link to="/" onClick={logOut}>logOut</Link>
                       </button>
                   </div>
                </form>
            </div>
     )};
}

export default Login;