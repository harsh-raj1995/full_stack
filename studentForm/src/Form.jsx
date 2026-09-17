import axios from "axios"
import { useState } from "react"

function Form(props){
  const [data,setData]=useState(
    {
      name:"",
      email:"",
      course:"",
      phone:""
    }
  )
  let handleForm=(e)=>{
    e.preventDefault()
    props.fun(data)
    console.log("Data sent to App")
    axios.post("https://jsonplaceholder.typicode.com/users",data)
    .then((obj)=>(console.log("data sent...........")))
    .catch((err)=>(console.log("error occured......")))
  }
  let handleChange=(e)=>{
    setData({...data,[e.target.name]:e.target.value})
  }
    return(
      <>
      <h3>Student Form</h3>
      <form onSubmit={handleForm} >
        <label>Name : </label>
        <input name="name" value={data.name} onChange={handleChange} placeholder="Enter Your name" required></input>
        <br></br>
        <label>Email : </label>
        <input name="email" placeholder="Enter Valid email id" value={data.email} onChange={handleChange} required></input>
        <br></br>
        <label >Course : </label>
        <input name="course" placeholder="Enter prefered Course" value={data.course} onChange={handleChange} required></input>
        <br></br>
        <label>Phone : </label>
        <input name="phone" placeholder="Enter phone no..." value={data.phone} onChange={handleChange} required></input>
        <br></br>
        <button type="Submit">Submit</button>
      </form>
      </>
    )
}
export default Form