import React from 'react';
import '../App.css';

function Modal({show, setShow, content}) {
    const closeModal = () => {
        setShow(false)
    }
    if(show) {
        return (
        <div id="overlay" onClick={closeModal}>
                  <div id="content" onClick={(e) => e.stopPropagation()}>
                    <p>{content}</p>
                    <p><button onClick={closeModal}>close</button></p>
                  </div>
                </div>
        );
    }else{
        return null;
    }
}

export default Modal;