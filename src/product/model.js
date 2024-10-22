import { Schema, model } from "mongoose";

const ProductSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  deleted: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true
})

const ProductModel = model('product', ProductSchema)

export default ProductModel
