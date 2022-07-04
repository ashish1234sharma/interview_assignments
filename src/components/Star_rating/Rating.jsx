import React, { useState } from "react";

export const Rating = ({
  count,
  value,
  inactivecolor,
  size ,
  activecolor,
  onChange,
}) => {
   
  const stars = Array.from({ length: count }, () => "*");
  const handleChange = (value) => {
    onChange(value + 1);
    
  };

  return (
    <div>
      {stars.map((e, index) => {
        let style = inactivecolor;
        if (index < value) {
          style = activecolor;
        }
        console.log(e);
        return (
          <span
            className="star"
            key={index}
            style={{ color: style, fontSize: size }}
            onClick={() => handleChange(index)}
          >
            {e}
          </span>
        );
      })}
      {value}
    </div>
  );
};

export const StarRating = () => {
  const [rating, setRating] = useState(0);
  const handlechange = (value) => {
    setRating(value);
  };
  return (
    <div style={{ cursor: "pointer" }}>
      <Rating
        count={5}
        size={40}
        value={rating}
        activecolor="red"
        inactivecolor="grey"
        onChange={handlechange}
      ></Rating>
    </div>
  );
};
