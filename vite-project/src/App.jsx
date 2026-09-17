import { useState } from 'react'
import './App.css'
import Items from './Items'

function App() {
  const [list, setList] = useState([
    { id: 1, task: "Sample task", status: false },
    { id: 2, task: "Completed task", status: true }
  ])
  const [input, setInput] = useState("")

  function handleForm(e) {
    e.preventDefault()
    if (input.trim() === "") return

    const newItem = {
      id: Date.now(),
      task: input.trim(),
      status: false
    }

    setList([...list, newItem])
    setInput("")
  }

  function handleToggle(id) {
    setList(
      list.map((item) =>
        item.id === id ? { ...item, status: !item.status } : item
      )
    )
  }

  function handleDelete(id) {
    setList(list.filter((item) => item.id !== id))
  }

  return (
    <div className="App">
      <h1>Todo List</h1>
      <form onSubmit={handleForm}>
        <input
          type="text"
          placeholder="Add your Task here..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>

      <div className="list-container">
        {list.length === 0 ? (
          <p className="empty-msg">No tasks added yet!</p>
        ) : (
          list.map((item) => (
            <Items
              key={item.id}
              item={item}
              onToggle={handleToggle}
              onDelete={handleDelete}
            />
          ))
        )}
      </div>
    </div>
  )
}

export default App
