import React, { useState } from "react";

export const As_Uppercase = () => {
  const [data, setData] = useState("");
  const [blur, SetBlur] = useState(false);
  console.log(data);

  const handleChange = (e) => {
    setData(e.target.value);
  };

  const HandleBlur = () => {
    SetBlur(true);
  };
  return (
    <div>
      <input
        type="text"
        placeholder="text"
        value={blur ? data.toUpperCase() : data}
        onBlur={HandleBlur}
        onChange={handleChange}
      />
    </div>
  );
};
