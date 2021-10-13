import React from 'react';
import photo1 from './001.jpg';
import photo2 from './002.JPG';
import photo3 from './003.jpg';
import photo4 from './004.JPG';
import photo5 from './005.jpg';
import photo6 from './006.jpg';
import './photo.css';

//写真の追加

function Photo() {
    return(
    <body>
            <h1>photo library</h1>
        <div className="container">
            <img src={photo1} alt="夜景" />
            <img src={photo2} alt="夕日" />
            <img src={photo3} alt="エモい" />
        </div>
        <div className="container">
            <img src={photo4} alt="夜景" />
            <img src={photo5} alt="夕日" />
            <img src={photo6} alt="エモい" />
        </div>
    </body>
    );
}

export default Photo;