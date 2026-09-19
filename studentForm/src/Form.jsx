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
    .then((obj)=>(console.log(obj)))
    .catch((err)=>(console.log("error occured......")))
  }
  let handleChange=(e)=>{
    setData({...data,[e.target.name]:e.target.value})
  }
    return(
      <section className="form-panel" aria-labelledby="form-title">
        <div className="section-heading">
          <p className="card-number">01</p>
          <h2 id="form-title">Add a student</h2>
        </div>
        <form onSubmit={handleForm}>
          <label htmlFor="name">Name</label>
          <input id="name" name="name" value={data.name} onChange={handleChange} placeholder="Your name" required />
          <label htmlFor="email">Email</label>
          <input id="email" name="email" placeholder="you@example.com" value={data.email} onChange={handleChange} required />
          <label htmlFor="course">Course</label>
          <input id="course" name="course" placeholder="Your course" value={data.course} onChange={handleChange} required />
          <label htmlFor="phone">Phone</label>
          <input id="phone" name="phone" placeholder="Your phone number" value={data.phone} onChange={handleChange} required />
          <button type="submit">Submit student <span aria-hidden="true">↗</span></button>
        </form>
      </section>
    )
}
export default Form