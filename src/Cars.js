import React from 'react';
const Car =(props)=>{
     
    return(
    //     console.log(props.children);
             <div style=  {{background:'pink',width:'400px', margin :'2px'}}>
           <p>{props.children } </p>
           <p> {props.color}</p>
           </div>

    )
}
export default Car;
