import React,{useState} from 'react'
const register=()=> {
const [name,setname]=useState("")
const [year,setYear]=useState("")
const [height,setheight]=useState("")
const [weight,setweight]=useState("")
    return(
       < div> 
       <input placeholder= "name" value={name} onChange={e =>setname(e.target.value)} />
       <input placeholder= "Year" value={year} onChange={e =>setYear(e.target.value)} />
       <input placeholder= "height" value={height} onChange={e =>setheight (e.target.value)} />
       <input placeholder= "weight" value={weight} onChange={e =>setweight (e.target.value)} />

       </div>
    )
}