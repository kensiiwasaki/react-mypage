import React from 'react';
import '../App.css';

function Modal(props) {
    if(props.show) {
        return (
        <div id="overlay">
                  <div id="content">
                    <p>モーダル</p>
                    <p><button>close</button></p>
                  </div>
                </div>
        );
    }else{
        return null;
    }
}

export default Modal;