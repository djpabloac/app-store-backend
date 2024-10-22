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
    const users = await ProductService.get()

    return resp
      .status(200)
      .json(users)
  }

  async getById(req, resp) {
    const { params: { id } } = req

    const users = await ProductService.getById(id)

    return resp
      .status(200)
      .json(users)
  }

  async update(req, resp) {
    const { params: { id }, body } = req

    await ProductService.update(id, body)

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