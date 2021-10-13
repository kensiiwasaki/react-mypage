import React from "react";
import "../App.css";

//モーダルウィンドウの追加

function Modal({ show, setShow }) {
  const closeModal = () => {
    setShow(false);
  };
  if (show) {
    return (
      <div id="overlay" onClick={closeModal}>
        <div id="content" onClick={(e) => e.stopPropagation()}>
          <p>出身：愛知県出身</p>
          <p>生年月日：2000年4月9日</p>
          <p>
            <button onClick={closeModal}>close</button>
          </p>
        </div>
      </div>
    );
  } else {
    return null;
  }
}

export default Modal;
