import OrderService from './service.js'

class OrderController {
  async create(req, resp) {
    const { body } = req
    const order = await OrderService.create(body)

    return resp
      .status(200)
      .json(order)
  }

  async get(req, resp) {
    const orders = await OrderService.get()

    return resp
      .status(200)
      .json(orders)
  }

  async getById(req, resp) {
    const { params: { id } } = req

    const order = await OrderService.getById(id)

    return resp
      .status(200)
      .json(order)
  }

  async delete(req, resp) {
    const { params: { id } } = req

    await OrderService.delete(id)

    return resp
      .status(200)
      .json({
        message: 'Eliminado correctamente'
      })
  }
}

export default new OrderController()