import React, { useState } from "react";
import { Slider } from "./ImageData";
import "./imageslider.css";

export const ImageSlider = () => {
  const [current, setCurrent] = useState(0);

  const handlePrev = () => {
    setCurrent(current == 0 ? Slider.length-1 : current - 1);
  };
  const handleNext = () => {
    setCurrent(current == Slider.length-1 ? 0 : current + 1);
  };
  if (!Array.isArray(Slider) || Slider.length <= 0) {
    return null;
  }

  
  return (
    <section>
      <button className="prev" onClick={handlePrev}>
        prev
      </button>
      <button className="next" onClick={handleNext}>
        next
      </button>
      {Slider.map((e,index) => {
        return (
          <div key={e.id} className="slides">
            {index==current && (<img src={e.image} alt="Mountain" className="image"  />)}
            
          </div>
        );
      })}
    </section>
  );
};
