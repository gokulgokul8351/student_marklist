import studentSchema from '../models/student.models.js'

// Get all students
export const getStudents = async (req, res) => {
  try {
    const students = await studentSchema.find()
    res.status(201).json(students)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

// Add a student
export const addStudent = async (req, res) => {
  // id, name, mark

  // validate
  const newStudent = new studentSchema({
    name: req.body.name,
    class: req.body.class,
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
export const updateStudent = async (req, res) => {
  try {
    const updateStudent = await studentSchema.findOneAndUpdate(
      { _id: req.params.id },
      {
        name: req.body.name,
        class: req.body.class,
        mark: req.body.mark,
      },
      {
        new: true,
      }
    )

    res.status(200).json(updateStudent)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

// Delete a student
export const deleteStudent = async (req, res) => {
  const studentId = req.params.id

  try {
    await studentSchema.deleteOne({ _id: studentId })
    res.status(200).json({ message: 'Student deleted successfully..' })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}
