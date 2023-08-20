import { useState } from "react"
export default function App() {
  const  [newItem, setNewItem] = useState("")

  function handleSubmit(e) {
    e.preventDefault()
  }
  return (
    <>
  <from onSubmit={handleSubmit} className="new-item-form">
    <div className="form-row">
    <label htmlFor="item">New Item</label>
    <input value={newItem} onChange={e => setNewItem(e.target.value)} 
    type="text" id="item" />
    </div>
    <button className="btn">add</button>
  </from>
  <h1 className="header">Todo List </h1>
  <ul className="list">
  <li>
    <label>
      <input type="checkbox" />
      item 1

    </label>
    <button className="btn btn-danger">Delete</button>
  </li>
  <li>
    <label>
      <input type="checkbox" />
      item 2

    </label>
    <button className="btn btn-danger">Delete</button>
  </li>
  </ul>

  </>
  )
}
