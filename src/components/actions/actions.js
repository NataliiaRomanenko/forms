import React,{Component} from 'react';
import './actions.css'
import Modal from "../modal";
import {Link} from "react-router-dom";


class Actions extends Component {
    constructor (props) {
        super(props);
        this.state = {
            isModalWindow:false,
            message:undefined,
        };
    };
    checkName = () => {
        this.setState({isModalWindow: true});
        let isAdmin  = this.props.isAdmin;
        if(isAdmin) {
            this.setState({message: 'The access granted'});
        } else {
            this.setState({message: 'The access denied'});
        }
    };
    hideModal = () => {
        this.setState({isModalWindow: false});
    };
    render(){
        const {logOut, username, isAdmin} = this.props;
        console.log("actions props:", this.props);
        return(
            <div className="blockWrapper">
                <div className='form' >
                    <div className="container buttonGroup">
                        <button type="submit" disabled={!isAdmin} onClick={this.checkName}>Action</button>
                        <button type="button" className="cancelbtn">
                            <Link to="/login" onClick={logOut}>logOut</Link>
                        </button>
                    </div>
                </div>
                <Modal message={this.state.message} isAdmin={isAdmin} name={username} isModalWindow={this.state.isModalWindow} handleClose={this.hideModal}/>
            </div>
        )
    }
}

export default Actions;