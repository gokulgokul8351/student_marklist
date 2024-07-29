import express from 'express'

const app = express() // create express app
const PORT = 5000

app.get('/', (req, res) => {
  res.json({ msg: 'Hello students' })
})

// CRUD functionality

// Get all students
app.get('/student')

// Add new student
app.post('/student')

// Update student
app.put('/student/:id')

// Delete student
app.delete('/student/:id')

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`)
})
