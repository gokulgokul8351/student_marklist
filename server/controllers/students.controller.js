import studentSchema from '../models/student.models.js'

// Get all students
export const getStudents = (req, res) => {}

// Add a student
export const addStudent = async (req, res) => {
  // id, name, mark

  // validate
  const newStudent = new studentSchema({
    name: req.body.name,
    mark: req.body.mark,
  })

  try {
    const student = await newStudent.save()
    return res.status(201).json(student)
  } catch (error) {
    return res.status(400).json({ message: error.message })
  }
}

// Update a student
export const updateStudent = (req, res) => {
  res.send({ msg: 'update a student' })
}

// Delete a student
export const deleteStudent = (req, res) => {
  res.send({ msg: 'delete a student' })
}
