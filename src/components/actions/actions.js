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
            chkName: ["admin", "user"]
        };
    };
    checkName = () => {
        this.setState({isModalWindow: true});
        let username = this.props.username;
        if(username === 'user') {
            this.setState({message: 'The access denied'});
        }
        if(username === 'admin') {
            this.setState({message: 'The access granted'});
        }
    };
    hideModal = () => {
        this.setState({isModalWindow: false});
    };
    render(){
        const {logOut, username} = this.props;
        console.log("actions props:", this.props);
        return(
            <div className="blockWrapper">
                <div className='form' >
                    <div className="container buttonGroup">
                        <button type="submit" disabled={!this.state.chkName.includes(username)} onClick={this.checkName}>Action</button>
                        <button type="button" className="cancelbtn">
                            <Link to="/login" onClick={logOut}>logOut</Link>
                        </button>
                    </div>
                </div>
                <Modal message={this.state.message}  name={username} isModalWindow={this.state.isModalWindow} handleClose={this.hideModal}/>
            </div>
        )
    }
}

export default Actions;