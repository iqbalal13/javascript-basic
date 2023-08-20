export default function App() {
  return (
    <>
  <from className="new-item-form">
    <div className="form-row">
    <label htmlFor="item">New Item</label>
    <input type="text" id="item" />
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
