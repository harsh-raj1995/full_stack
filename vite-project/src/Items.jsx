import React from "react";
import { useState } from "react";

function Items(props){
  const [status,setStatus]= useState(props.item.status);
  const [d,setDelete]= useState(false);
  console.log(props.item.id);
  if(d){
    return <></>;
  }else{
    
  return (
    <>
    <br></br>
    <div className="Card">
      
      <div className="List">{props.item.task}</div>
      <div className="buttons">
      <button  onClick={()=>{
        setStatus(!status)
      }} className={`${status?"completed":"pending"}`}>{status?"Completed":"Pending"}</button>
      <button onClick={()=>{
        setDelete(true);
      }} >Delete</button>
      </div>
    </div>
    </>

  )
  }
}
export default React.memo(Items);