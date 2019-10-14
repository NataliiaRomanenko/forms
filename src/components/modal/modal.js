import React from 'react';
import {NavLink} from "react-router-dom";
import './modal.css';

const Modal = (props) => {
    const {handleClose, isModalWindow, message, name}= props;
    const showHideClassName = isModalWindow ? 'modal show' : 'modal';
    return(
        <div className={showHideClassName}>
            <section className={`modalContent ${isModalWindow ? "animate" :""}`}>
                <div className='close' onClick={handleClose}>×</div>
                <p className="modalMessage">{message}</p>
                <p>Hello {name}!<br/>
                    {
                        name=== "admin" ?
                            <span>You can <NavLink to={'/create_users'}> create users</NavLink></span>
                            :
                            <span>You can't create users</span>
                    }
                    </p>

            </section>
        </div>
    )
}

export default Modal;

