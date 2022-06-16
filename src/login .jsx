import React, { useState } from "react";

export const Login = () => {
  const [data, setData] = useState({
    username:"",
    password:""
  });
  console.log(data);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (e.target.username.value.length < 3 || e.target.password.value < 3) {
      alert("error");
    } else {
      const payload = {
        username: e.target.username.value,
        password: e.target.password.value,
      };
      setData(payload);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="username"
        id="username"
        
      />
      <input
        type="text"
        placeholder="password"
        id="password"
       
      />
      <button type="submit">submit</button>
    </form>
  );
};
