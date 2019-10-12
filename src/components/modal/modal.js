import React from 'react';
import {NavLink} from "react-router-dom";
import './modal.css';

const Modal = (props) => {
    const {handleClose, show, message, userName}= props;
    const showHideClassName = show ? 'modal show' : 'modal';
    return(
        <div className={showHideClassName}>
            <section className={`modalContent ${show ? "animate" :""}`}>
                <div className='close' onClick={handleClose}>×</div>
                <p className="modalMessage">{message}</p>
                <p>Hello {userName}!
                    {
                        userName === "admin" ?
                            <p>You can <NavLink to={'/create_users'}> create users</NavLink></p>
                            :
                            <p>You can't create users</p>
                    }
                    </p>

            </section>
        </div>
    )
}

export default Modal;

