import logo from "./logo.svg";
import React, {useState} from 'react';
import "./App.css";
import imagesArr from "./imageData";

function App() {
  const [bigImage, setBigImage] = useState(imagesArr[0].img);
  const handleClick = (imgUrl) => {
    setBigImage(imgURl);
  };

  const images = imagesArr.map((image, index) => {
    const imageClick = () => {
      setBigImage(Data.img);
    };
    return (
      <img
        className={"image-thumb"}
        id={image.id}
        src={image.img}
        alt={image.city}
        key={index}
        onClick={() => handleClick(image.img)}
      />
    );
  });
  return (
    <div className="App">
      <h1> Cities Of the World</h1>
      <div id="wrapper">
        <div id="thumbnails">{images}</div>
       { <img src={bigImage} id="bigimage" alt="bigImage" />}
      </div>
    </div>
  );
}

export default App;
