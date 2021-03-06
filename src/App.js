import React from "react";
import "./App.css";
import Modal from "./components/modal";
import { useState } from "react";
import Icon from "./IMG_2580.jpg";
import Language from "./components/language";
import Photo from "./photo/Photo";
import TodoList from "./components/TodoList";

function App() {
  const [show, setShow] = useState(false);
  const [view, setView] = useState(false);
  return (
    <body>
      <div id="home" className="big-bg">
        <div className="home-content wrapper">
          <p className="title">kenshi's photo library</p>
        </div>
      </div>
      <div>
        <p className="profile">profile</p>
      </div>
      <div className="profileContainer">
        <div className="iconContainer">
          <img src={Icon} alt="アイコン" className="icon" />
        </div>
        <div className="nameContainer">
          <p className="name">岩崎 拳志</p>
          <p className="furigana">iwasaki kenshi</p>
          <div className="modal">
            <button className="btn" onClick={() => setShow(true)}>
              more
            </button>
            <Modal show={show} setShow={setShow} />
          </div>
        </div>
      </div>

      <div>
        <Photo />
      </div>
      <div>
        <TodoList />
      </div>
      <div>
        <h1>
          <button onClick={() => setView(true)} className="view">
            開発言語
          </button>
        </h1>
        <Language view={view} setView={setView} />
      </div>
      <footer>
        <a className="link1" href="https://www.instagram.com/kenshidayoo">
          instagram
        </a>
        <a className="link2" href="https://github.com/kensiiwasaki">
          github
        </a>
      </footer>
    </body>
  );
}

export default App;
