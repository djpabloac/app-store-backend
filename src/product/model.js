import { Schema, model } from "mongoose";
import { CURRENCY_ENUM, UNIT_TYPE_ENUM } from "../commons/constant/index.js";

const ProductSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  unitType: {
    type: String,
    required: true,
    enum: UNIT_TYPE_ENUM
  },
  currency: {
    type: String,
    required: true,
    enum: CURRENCY_ENUM
  },
  price: {
    type: Number,
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
