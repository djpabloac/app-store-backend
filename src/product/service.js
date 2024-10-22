import ProductModel from "./model.js";

class ProductService {
  async create(input) {
    const product = await ProductModel.create(input);

    return product.toJSON();
  }
  async exists(id) {
    return ProductModel.findById(id).lean()
  }
  async delete(id) {
    const product = await this.exists(id)
    if (!product) throw new Error("product not found");

    await ProductModel.deleteOne({ _id: id })
  }
}

export default new ProductService()