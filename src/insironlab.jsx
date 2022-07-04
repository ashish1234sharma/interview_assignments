import React,{useState} from 'react'


export const Insironlab = () => {
    const contry = [
        {
          id: 1,
          name: "cont1",
        },
        {
          id: 2,
          name: "cont2",
        },
        {
          id: 3,
          name: "cont3",
        },
      ];
      const state = [
        {
          id: 1,
          Contid: 1,
          name: "state1",
        },
        {
          id: 2,
          Contid: 1,
          name: "state2",
        },
        {
          id: 3,
          Contid: 1,
          name: "state3",
        },
        {
          id: 4,
          Contid: 2,
          name: "state4",
        },
        {
          id: 5,
          Contid: 2,
          name: "state5",
        },
        {
          id: 6,
          Contid: 3,
          name: "state6",
        },
      ];
    const [country,setCountry] = useState("")
    const [data,setData] =useState([])
    
    console.log(data)
    console.log(country)
    
     const handleCountry=(e)=>{
        setCountry(e.target.value)
        let id= +e.target.value
    setData( state.filter((el)=> el.Contid === id))
     }
     
  return (
    <div>
        <select onChange={(e)=>handleCountry(e)}>
            <option>country</option>
            {
                contry.map((e)=>{
                    return(
                        <option value={e.id} key={e.id}>{e.name}</option>
                    )
                    
                })
            }
        </select>
        <select>
            {data.map((e)=>{
                return(
                    <option>{e.name}</option>
                )
                
            })}
        </select>
    </div>
  )
}
