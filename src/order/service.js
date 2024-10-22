import OrderModel from "./model.js"

class OrderService {
  async create(input) {
    const order = await OrderModel.create(input)

    return order.toJSON();
  }
  async get() {
    return OrderModel
      .find({})
      .lean()
  }
  async getById(id) {
    return OrderModel
      .findById(id)
      .lean()
  }
  async exists(id) {
    const order = await this.getById(id)
    if (!order) throw new Error("product not found")

    return order
  }
  async delete(id) {
    const order = await this.exists(id)

    await OrderModel.deleteOne({ _id: order._id })
  }
}

export default new OrderService()