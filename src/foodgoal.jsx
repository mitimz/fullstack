import React from 'react';
const Foodgoal = () => {
   const data = [{
      partofday: "breakfast", dish: "milk", calory:36, carbs: 3,
      fat: 2, proteine: 2, sugar: 3

   }, {
      partofday: "breakfast", dish: "solet",calory:150, carbs: 27,
      fat: 3, proteine: 5, sugar: 1,

   }, {

      partofday: "lunch", dish: "salmon",calory:144, carbs: 0,
      fat: 10, proteine: 5,

   },{
      partofday: "breakfast", dish: "juice",calory:14, carbs: 3,
      fat: 3, proteine: 0, sugar: 3,

   } , {
   }, {

      partofday: "lunch", dish: "Chicken", calory: 100,carbs: 0,
      fat: 10, proteine: 5,

   }, {
   }, {

      partofday: "lunch", dish: "Beef",calory:150, carbs: 0,
      fat: 10, proteine: 5,

   }, {
      partofday: "Dinner", dish: "egg", calory:120,carbs: 30,
      fat: 10, proteine: 5,

   }, {
      partofday: "Dinner", dish: "Salad",calory:130, carbs: 30,
      fat: 10, proteine: 5,

   }
   ];
   return (
      <div>

         <table>
            <thead>
               <tr>
                  
                  <td>Dish</td>
                  <td> calory </td>
                  <td>Carbs</td>
                  <td>Fat</td>
                  <td>Proteine</td>
                  <td>Sugar</td>
               </tr>
            </thead>
            <tbody>
               <tr><td colspan="4"><h2>Breakfast</h2></td></tr>
               {data.filter(d => d.partofday === "breakfast").map(m => <tr> <td> {m.dish} </td><td> {m.calory}</td>  {m.carbs} </td> <td>{m.fat} </td> <td> {m.proteine} </td> <td> {m.sugar}</td></tr>)}
               <tr><td colspan="4"><h2>Lunch</h2></td></tr>
               {data.filter(d => d.partofday === "lunch").map(m => <tr> <td> {m.dish} </td><td>  {m.carbs} </td> <td>{m.fat} </td> <td> {m.proteine} </td> <td> {m.sugar}</td></tr>)}
               <tr><td colspan="4"><h2>Dinner</h2></td></tr>
               {data.filter(d => d.partofday === "Dinner").map(m => <tr> <td> {m.dish} </td><td>  {m.carbs} </td> <td>{m.fat} </td> <td> {m.proteine} </td> <td> {m.sugar}</td></tr>)}
            </tbody>
         </table>
      </div>
   )


}
export default Foodgoal;