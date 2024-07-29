import { model, Schema } from 'mongoose'

// write the student schema
const schema = new Schema({
  name: { type: String, required: true },
  mark: { type: Number, required: true },
})

// create student model
const studentSchema = model('Student', schema)

export default studentSchema
