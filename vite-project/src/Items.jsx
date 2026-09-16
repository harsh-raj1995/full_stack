import { useState } from "react";

function Items(props){
  const [status,setStatus]= useState(props.item.status);

  return (
    <>
    <br></br>
    <div className="Card">
      
      <div className="List">{props.item.task}</div>
      <button  onClick={()=>{
        setStatus(!status)
      }} className={`${status?"completed":"pending"}`}>{status?"Completed":"Pending"}</button>
    </div>
    </>

  )
}
export default Items;