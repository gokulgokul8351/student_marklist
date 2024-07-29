import express from 'express'
import routes from './routes/students.route.js'

const app = express() // create express app
const PORT = 5000

app.get('/', (req, res) => {
  res.json({ msg: 'Hello students' })
})

// Middlewares
app.use('/student', routes)

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`)
})
