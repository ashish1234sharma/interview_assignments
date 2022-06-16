import React, { useState, useEffect } from "react";
import "./api.css"

export const Apifetch = () => {
  const name = [
    {
      id: 1,
      name: "Ashish",
      category: "man",
    },
    {
      id: 2,
      name: "Ajay",
      category: "man",
    },
    {
      id: 3,
      name: "sonal",
      category: "women",
    },
    {
      id: 4,
      name: "jyoti",
      category: "women",
    },
    {
      id: 5,
      name: "Akash",
      category: "women",
    },
    {
      id: 6,
      name: "akansha",
      category: "women",
    },
  ];
  const [data, setData] = useState([]);

  console.log(data);
  useEffect(() => {
    handleMen()
  }, []);
  const handleMen=()=>{
    const newarr = name.filter((e) => e.category == "women");

    setData(newarr);
  }
  const handlewomen=()=>{
    const newarr = name.filter((e) => e.category == "man");

    setData(newarr);
  }
  const handletotal=()=>{
    

    setData(name);
  }

  return (
    <div style={{marginLeft:'300px'}}>
      <table >
        <thead style={{border:'1px spolid black'}}>
        <tr>
          <th>Name</th>
          <th>Category</th>
        </tr>
        </thead>
        {data.map((e) => {
          return (
            <tbody key={e.id} style={{border:'1px spolid black'}}>
            <tr >
              <td>{e.name}</td>
              <td>{e.category}</td>
            </tr>
            </tbody>
          );
        })}
      </table>
      <button onClick={handleMen}>men</button>
      <button onClick={handlewomen}>women</button>
      <button onClick={handletotal}>total</button>
    </div>
  );
};
