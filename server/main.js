import express from 'express'
import routes from './routes/students.route.js'
import connectDB from './lip/db.js'
import cors from 'cors'

const app = express() // create express app
const PORT = 5000

// cors policy
app.use(cors())

// Data understanding middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// connect DataBase
connectDB()

// Routes
app.get('/', (req, res) => {
  res.json({ msg: 'Hello students' })
})

// Middlewares routes
app.use('/student', routes)

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`)
})
