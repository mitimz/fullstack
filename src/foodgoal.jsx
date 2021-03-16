const Foodgoal= ()=>{
   const data=[];
   return(
      <div>  
<h2>breakfast</h2>
{ data.filter(d => d.partofday==="breakfast").map(m =><tr> <td> {m.dish} </td><td>  {m.carbs} </td> <td>{m.fat} </td> <td> {m.proteine} </td> <td> {m.partofdy}</td></tr>)}

      </div>
    )


 }
