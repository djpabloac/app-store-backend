import ProductService from './service.js'

class ProductController {
  async create(req, resp) {
    try {
      const { body } = req
      const product = await ProductService.create(body)

      return resp
        .status(200)
        .json(product)
    } catch (error) {
      return resp
        .status(500)
        .json(error)
    }
  }

  async get(req, resp) {
    return resp
      .status(200)
      .json({
        message: 'Leido correctamente'
      })
  }

  async update(req, resp) {
    return resp
      .status(200)
      .json({
        message: 'Actualizado correctamente'
      })
  }

  async delete(req, resp) {
    const { params: { id } } = req

    await ProductService.delete(id)

    return resp
      .status(200)
      .json({
        message: 'Eliminado correctamente'
      })
  }
}

export default new ProductController()