import React from 'react';
import './App.css';
import Modal from './components/modal'
import { useState } from 'react';

function App() {
  const [show, setShow] = useState(false)
  return (
    <header>
      <div>
        <p className="name">岩崎　拳志</p>
        <p className="furigana">(iwasaki kenshi)</p>
      </div>
      <div>
        <button onClick={() => setShow(true)}>Click</button>
        <Modal show={show} setShow={setShow} content="ここから変更可能" />
      </div>
    </header>
  );
}

export default App;
