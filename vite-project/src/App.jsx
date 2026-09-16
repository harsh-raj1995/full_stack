import { useState } from 'react'
import './App.css'
import Items from './Items'

function App() {
  const [count, setCount] = useState(0)
  const [list, addItem] = useState([])
  const [input,updateInput]= useState("Add your Task here")
  function handleForm(e){
    e.preventDefault()
      let v=count;
      setCount(count+1);
      addItem([...list,{id:v,task:input,status:false}]);
    
  }
  function handleInput(e){
    e.target.name=e.target.value;
    updateInput(e.target.value);
  }
  return (
    <div className='App'>
    <h1> Todo List</h1>
    <form onSubmit={handleForm}>
      <input value={input} name="task" onChange={handleInput}></input>
      <button >Add</button>
    </form>
    <br></br>
    <hr></hr>
      {list.map((item)=>(
        <Items item={item} key={item.id}></Items>
        
      ))}
    </div>
  )
}

export default App
