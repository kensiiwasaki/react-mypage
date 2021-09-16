import React from 'react';
import "./language.css";

function Language({view, setView}) {
  const closeLanguage = () => {
    setView(false)
  }
  if(view){
    return (
        <div>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
          </ul>
        </div>
    );
  }else{
    return null;
  }
}

export default Language;