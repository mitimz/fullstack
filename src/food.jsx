import React,{useState} from 'react'
const dish=()=> {
const [calories,setcalories]=useState("")
const [carbs,setcarbs]=useState("")
const [fat,setfat]=useState("")
const [proteine,setproteine]=useState("")
const [partofday,setpartofday]=useState("")
const [sodium,setsodium]=useState("")
const [suggar,setsuggar]=useState("")

    return(
       < div>
       <select name="" id="" value={partofday} onChange={e =>setpartofday(e.target.value)} >

           <option value="breakfast"> Breakfast</option> 
           
           <option value="lunch">lunch</option>            
           <option value="breakfast"> Breakfast</option>            
           <option value="dinner"> Dinner</option>           
           <option value="snacks"> Snacks</option> 
           </select> 

       <input placeholder= "name" value={calories} onChange={e =>setcalories(e.target.value)} />
       <input placeholder= "Year" value={carbs} onChange={e =>setcarbs(e.target.value)} />
       <input placeholder= "height" value={fat} onChange={e =>setfat (e.target.value)} />
       <input placeholder= "proteine" value={proteine} onChange={e =>setproteine (e.target.value)}/>
       <input placeholder= "sodium" value={sodium} onChange={e =>setsodium (e.target.value)} />
       <input placeholder= "suggar" value={suggar} onChange={e =>setsuggar (e.target.value)} />

       </div>

    )
}