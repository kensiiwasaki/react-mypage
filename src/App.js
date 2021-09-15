import React from 'react';
import './App.css';
import Modal from './components/modal'
import { useState } from 'react';
import Icon from './IMG_2580.jpg';
import Language from './components/language';

function App() {
  const [show, setShow] = useState(false)
  return (
    <body>
      <div id="home" className="big-bg">
        <header className="page-header wrapper">岩崎拳志のマイページ</header>
      <div className="home-content wrapper">
        <p className="header">kenshi's photo library</p>
      </div>
      </div>
      <div>
        <img src={Icon} alt="アイコン" className="icon" />
        <p className="name">岩崎 拳志</p>
        <p className="furigana">(iwasaki kenshi)</p>
      </div>
      <div className="modal">
        <button className="btn" onClick={() => setShow(true)}>プロフィール</button>
        <Modal show={show} setShow={setShow}  />
      </div>
      <div>
        <Language />
      </div>
      <footer>
        <a className="link1" href="https://www.instagram.com/kenshidayoo">instagram</a>
        <a className="link2" href="https://github.com/kensiiwasaki">github</a>
      </footer>
    </body>
  );
}

export default App;
