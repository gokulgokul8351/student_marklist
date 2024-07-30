import './App.css'

function App() {
  return (
    <>
      <div>
        <header>
          <h2 className="header">Students Record Sheet</h2>
        </header>
        <main className="container">
          <div className="input-search">
            <input
              type="search"
              name="search"
              id="search"
              placeholder="Search details"
            />
            <button className="btn green ">Add Student</button>
          </div>
          <table className="table">
            <thead>
              <tr>
                <th>S.No</th>
                <th>Name</th>
                <th>Class</th>
                <th>Mark</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Gokul</td>
                <td>12th</td>
                <td>100%</td>
                <td>
                  <button className="btn green">Edit</button>
                </td>
                <td>
                  <button className="btn red">Delete</button>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>Gokul</td>
                <td>12th</td>
                <td>100%</td>
                <td>
                  <button className="btn green">Edit</button>
                </td>
                <td>
                  <button className="btn red">Delete</button>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>Gokul</td>
                <td>12th</td>
                <td>100%</td>
                <td>
                  <button className="btn green">Edit</button>
                </td>
                <td>
                  <button className="btn red">Delete</button>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>Gokul</td>
                <td>12th</td>
                <td>100%</td>
                <td>
                  <button className="btn green">Edit</button>
                </td>
                <td>
                  <button className="btn red">Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
        </main>
      </div>
    </>
  )
}

export default App
