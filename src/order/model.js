import mongoose from "mongoose";
import { CURRENCY_ENUM, UNIT_TYPE_ENUM } from "../commons/constant/index.js";

const OrderDetailSchema = new mongoose.Schema({
  productId: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref: 'product'
  },
  name: {
    type: String,
    required: true
  },
  unitType: {
    type: String,
    required: true,
    enum: UNIT_TYPE_ENUM
  },
  quantity: {
    type: Number,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
})

const OrderSchema = new mongoose.Schema({
  clientId: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref: 'client'
  },
  currency: {
    type: String,
    required: true,
    enum: CURRENCY_ENUM
  },
  amount: {
    type: Number,
    required: true
  },
  deleted: {
    type: Boolean,
    default: false
  },
  details: [OrderDetailSchema],
}, {
  timestamps: true
})

const OrderModel = mongoose.model('order', OrderSchema)

export default OrderModel
