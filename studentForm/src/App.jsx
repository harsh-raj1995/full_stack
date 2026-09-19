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
    <main className="content-grid">
      <Form fun={handleData}/>
      <Display data={data} />
    </main>
  )
}

export default App
