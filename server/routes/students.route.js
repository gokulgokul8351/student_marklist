import express from 'express'
import {
  getStudents,
  addStudent,
  updateStudent,
  deleteStudent,
} from '../controllers/students.controller.js'

const router = express.Router()

// CRUD functionality

// Get all students
router.get('/', getStudents)

// Add new student
router.post('/', addStudent)

// Update student
router.put('/:id', updateStudent)

// Delete student
router.delete('/:id', deleteStudent)

export default router
