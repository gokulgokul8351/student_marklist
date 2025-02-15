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

  const studentExists = await studentSchema.findOne({ name: req.body.name })
  if (studentExists) {
    return res.status(404).json({ message: 'Student already exists 1' })
  } else {
    // validate
    const newStudent = new studentSchema({
      name: req.body.name,
      class: req.body.class,
      mark: req.body.mark,
    })

    try {
      const student = await newStudent.save()
      return res.status(201).json({
        message: `New Student ${newStudent.name} Added Successfully...!`,
        student,
      })
    } catch (error) {
      return res.status(401).json({ message: error.message })
    }
  }
}

// Update a student
export const updateStudent = async (req, res) => {
  const studentExists = await studentSchema.findOne({ name: req.body.name })

  if (studentExists) {
    return res
      .status(404)
      .json({ message: `${studentExists.name} already exists 2` })
  }

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

    res.status(200).json({
      message: `Student ${req.body.name} updated successfully`,
      updateStudent,
    })
  } catch (error) {
    res.status(401).json({ message: 'Already exists this student name' })
  }
}

// Delete a student
export const deleteStudent = async (req, res) => {
  const studentId = req.params.id

  try {
    await studentSchema.deleteOne({ _id: studentId })
    res.status(200).json({
      message: `Student deleted successfully..`,
    })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}
