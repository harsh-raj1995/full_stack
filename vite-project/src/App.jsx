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

      <main id="home">
        <section className="intro" aria-labelledby="page-title">
          <p className="eyebrow">A quiet place for busy minds</p>
          <h1 id="page-title">
            Make room for
            <br /> <em>progress.</em>
          </h1>
          <p className="intro-copy" id="about">
            A considered list for the small steps, big plans, and work worth
            finishing next.
          </p>
        </section>

        <form className="add-student" onSubmit={handleForm}>
          <input
            type="text"
            placeholder="Add a task"
            aria-label="Add a task"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button type="submit">Add task</button>
        </form>
        <br></br>
        <section className="directory" id="tasks" aria-label="Todo list">
          <div className="decorative-circle" aria-hidden="true" />
          {list.length === 0 ? (
            <p className="empty-msg">Nothing here yet.</p>
          ) : (
            list.map((item, index) => (
              <Items
                key={item.id}
                item={item}
                index={index}
                onToggle={handleToggle}
                onDelete={handleDelete}
              />
            ))
          )}
        </section>

        
      </main>
    </div>
  )
}

export default App
