import { useState } from 'react'
import Form from './Form'
import Display from './Display'
import './App.css'

function App() {
  
  const [data,setData]= useState({
      name:"",
      email:"",
      course:"",
      phone:""
    })
  let handleData=(obj)=>{
    setData(obj)
    console.log("upper")
  }
  return (
    <>
      <Form  fun={handleData}/>
      <br></br>
      <Display data={data} />
    </>
  )
}

export default App
