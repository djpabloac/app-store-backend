import { Schema, model } from "mongoose";

const ClientSchema = new Schema({
  email: {
    type: String,
    unique: true,
    lowercase: true,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  birthday: {
    type: Date,
    required: true
  },
  address: {
    type: String
  },
  deleted: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true,
})

const ClientModel = model('client', ClientSchema)

export default ClientModel
