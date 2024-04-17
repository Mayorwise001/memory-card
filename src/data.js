
import React, { useState, useEffect } from "react";

import imageData from './data-fold/data'; // Import JSON file containing image data
import Splash from "./splashscreen";

function Data() {
  const [images, setImages] = useState([]);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [clickedImages, setClickedImages] = useState(new Set());
 





  useEffect(() => {
    setImages(imageData); // Set initial images from JSON data
  }, []);

  const handleClick = (id) => {
    console.log(id)
    if (clickedImages.has(id)) {
    
    //   Reset the score if the same image is clicked twice
      setScore(0);
      setClickedImages(new Set());
    } else{
      // Increment score if a new image is clicked
      if (score + 1 > bestScore) {
        setBestScore(score + 1);
      }
      setScore(score + 1);
      setClickedImages(new Set(clickedImages).add(id));
    }

    // Update the best score if the current score is higher
 

    // Refresh the images after each click
    setImages(shuffleArray(images)); // Shuffle images after each click
  };

  const shuffleArray = (array) => {
    // Fisher-Yates shuffle algorithm
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };



  const reset=()=>{
    setBestScore(0)
    setScore(0);
    setImages(shuffleArray(images));
  }
  return (
    <div>
      <div>
        <h1>Score: {score}</h1>
        <h1>Best Score: {bestScore}</h1>
        <button onClick={reset}>Reset</button>
      </div>
      <div className="App">
      <h1>Memory Card Game</h1>
      <div className="gallery">
        {images.map((image)=> (
          <div>
              <img key={image.id} src={image.image} alt="" onClick={()=>handleClick(image.id)} />
              

          </div>
        ))}

        <Splash/>

        </div>
      </div>
    </div>

  );
}

export default Data;
