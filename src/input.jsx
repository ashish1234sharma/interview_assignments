import React, { useState } from "react";

export const Input = () => {
  const [input, setInput] = useState("");
  const [open, setOpen] = useState(true);

  const handleChange = (e) => {
    if (open) {
      setInput(e.target.value);
    }
  };
  const handleBlur = () => {
    setOpen(false);
  };
  return (
    <div>
      <input
        type="text"
        value={input}
        placeholder="Text"
        onBlur={handleBlur}
        onChange={(e) => handleChange(e)}
      />
    </div>
  );
};


