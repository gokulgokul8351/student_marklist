import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const API_URI = 'https://student-marklist.onrender.com'

  const [students, setStudents] = useState([])
  const [search, setSearch] = useState([])
  const [isModelOpen, setIsModelOpen] = useState(false)
  const [studentData, setStudentData] = useState({
    name: '',
    mark: '',
  })

  // Get all students
  const getALLStudents = async () => {
    await axios.get(`${API_URI}/student`).then((res) => {
      setStudents(res.data)
      setSearch(res.data)
    })
  }

  useEffect(() => {
    getALLStudents()
  }, [])

  // Search Functionality
  const handleSearch = (e) => {
    const searchText = e.target.value.toLowerCase()
    const filterStudent = students.filter(
      (student) =>
        student.name.toLowerCase().includes(searchText) ||
        student.mark.toString().toLowerCase().includes(searchText)
    )
    setSearch(filterStudent)
  }

  // Delete Functionality
  const handleDelete = async (id, name) => {
    if (window.confirm(`Are you sure you want to delete ${name}`)) {
      await axios.delete(`${API_URI}/student/${id}`)
      getALLStudents()
    }
  }

  // Add new student
  const handleAddStudent = () => {
    setStudentData({
      name: '',
      mark: '',
    })
    setIsModelOpen(true)
  }

  // Add model student data
  const handleData = (e) => {
    setStudentData({ ...studentData, [e.target.name]: e.target.value })
  }

  // submit new student data
  const handleSubmit = async (e) => {
    e.preventDefault()

    if (studentData._id) {
      await axios
        .put(`${API_URI}/student/${studentData._id}`, studentData)
        .then(() => {
          closeModel()
        })
    } else {
      await axios.post(`${API_URI}/student`, studentData).then((res) => {
        closeModel()
      })
    }
  }

  // Update a Student data
  const handleUpdate = (student) => {
    setStudentData(student)
    setIsModelOpen(true)
  }

  // close model
  const closeModel = () => {
    setIsModelOpen(false)
    getALLStudents()
  }

  return (
    <>
      <section>
        <header>
          <h2 className="header">Students Record Sheet</h2>
        </header>
        <main className="container">
          <article className="input-search">
            <input
              type="search"
              name="search"
              id="search"
              placeholder="Search Text Here"
              onChange={handleSearch}
            />
            <button
              className="btn green "
              onClick={handleAddStudent}
            >
              Add Student
            </button>
          </article>
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
              {search &&
                search.map((student, index) => {
                  return (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{student.name}</td>
                      <td>12th</td>
                      <td>{student.mark}%</td>
                      <td>
                        <button
                          className="btn green"
                          onClick={() => handleUpdate(student)}
                        >
                          Edit
                        </button>
                      </td>
                      <td>
                        <button
                          onClick={() =>
                            handleDelete(student._id, student.name)
                          }
                          className="btn red"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  )
                })}
            </tbody>
          </table>

          {isModelOpen && (
            <div className="model">
              <div className="model-content">
                <span
                  className="close-btn"
                  onClick={closeModel}
                >
                  &times;
                </span>
                <h2>{studentData._id ? 'Edit' : 'Add'} Student</h2>
                <div className="input-group">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    id="name"
                    value={studentData.name}
                    onChange={handleData}
                  />
                  <input
                    type="text"
                    name="mark"
                    placeholder="Mark"
                    id="mark"
                    value={studentData.mark}
                    onChange={handleData}
                  />
                  <button
                    className="btn green"
                    onClick={handleSubmit}
                  >
                    Add New
                  </button>
                </div>
              </div>
            </div>
          )}
        </main>
      </section>
    </>
  )
}

export default App
