import React from 'react';
import photo1 from './001.jpg';
import photo2 from './002.JPG';
import photo3 from './003.jpg';
import './photo.css';

function Photo() {
    return(
    <body>
            <p className="library">photo library</p>
        <div className="container">
            <img src={photo1} alt="夜景" />
            <img src={photo2} alt="夕日" />
            <img src={photo3} alt="エモい" />
        </div>
    </body>
    );
}

export default Photo;