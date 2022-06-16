import React, { useState } from "react";

export const Option = () => {
  const [data, setData] = useState("");
  console.log(data);
  const handlechange = (e) => {
    // const {id,value}= e.target

    setData(e.target.value);
  };
  return (
    <>
      <div>
        <select
          onChange={handlechange}
          style={{
            width: "200px",
            height: "30px",
            backgroundColor: "black",
            marginTop: "20px",
            color: "white",
            borderRadius: "5px",
          }}
        >
          <option>Country</option>
          <option value="India" id="india">
            India
          </option>
          <option value="Brazil" id="brazil">
            Brazil
          </option>
          <option value="usa" id="usa">
            USA
          </option>
          <option value="england" id="england">
            England
          </option>
        </select>
      </div>
      <div>
        {data == "India" ? (
          <select
            onChange={handlechange}
            style={{
              width: "200px",
              height: "30px",
              backgroundColor: "black",
              marginTop: "20px",
              color: "white",
              borderRadius: "5px",
            }}
          >
            <option value="delhi">Delhi</option>
            <option value="indore">Indore</option>
            <option value="banglore">Banglore</option>
          </select>
        ) : null}
        {data == "usa" ? (
          <select
            onChange={handlechange}
            style={{
              width: "200px",
              height: "30px",
              backgroundColor: "black",
              marginTop: "20px",
              color: "white",
              borderRadius: "5px",
            }}
          >
            <option value="mexico">mexico</option>
            <option value="washington">washington</option>
            <option value="london">london</option>
          </select>
        ) : null}
      </div>
    </>
  );
};
