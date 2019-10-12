import React from 'react';
import './modal.css';

const Modal = (props) => {
    console.log('Modal props: ', props);
    const {handleClose, show, message}= props;
    const showHideClassName = show ? 'modal show' : 'modal';
    return(
        <div className={showHideClassName}>
            <section className='modalContent animate'>
                <div className='close' onClick={handleClose}>×</div>
                <p className="modalMessage">{message} </p>
            </section>
        </div>
    )
}

export default Modal;

