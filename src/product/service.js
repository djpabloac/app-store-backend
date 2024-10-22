import ProductModel from "./model.js"

class ProductService {
  async create(input) {
    const product = await ProductModel.create(input)

    return product.toJSON();
  }
  async get() {
    return ProductModel
      .find({})
      .lean()
  }
  async getById(id) {
    return ProductModel
      .findById(id)
      .lean()
  }
  async exists(id) {
    const product = await this.getById(id)
    if (!product) throw new Error("product not found")

    return product
  }
  async delete(id) {
    const product = await this.exists(id)

    await ProductModel.deleteOne({ _id: product._id })
  }
  async update(id, input) {
    const product = await this.exists(id)

    await ProductModel
      .updateOne({ _id: product._id }, {
        $set: input
      })
  }
}

export default new ProductService()