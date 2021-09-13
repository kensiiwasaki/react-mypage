import React from 'react';
import './App.css';
import Modal from './components/modal'
import { useState } from 'react';
import Icon from './IMG_2580.jpg';

function App() {
  const [show, setShow] = useState(false)
  return (
    <body>
      <header>
        <p className="header">岩崎拳志のマイページ(練習)</p>
      </header>
      <div>
        <img src={Icon} alt="アイコン" className="icon" />
        <p className="name">岩崎 拳志</p>
        <p className="furigana">(iwasaki kenshi)</p>
      </div>
      <div className="modal">
        <button className="btn" onClick={() => setShow(true)}>Click</button>
        <Modal show={show} setShow={setShow} content="(ここから変更可能)" />
      </div>
      <footer>
        <a className="link" href="https://google.com">instagram</a>
        <a className="link" href="https://google.com">Twitter</a>
      </footer>
    </body>
  );
}

export default App;
