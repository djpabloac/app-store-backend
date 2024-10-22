import ClientService from './service.js'

class ClientController {
  async create(req, resp) {
    const { body } = req
    const client = await ClientService.create(body)

    return resp
      .status(200)
      .json(client)
  }

  async get(req, resp) {
    const clients = await ClientService.get()

    return resp
      .status(200)
      .json(clients)
  }

  async getById(req, resp) {
    const { params: { id } } = req

    const client = await ClientService.getById(id)

    return resp
      .status(200)
      .json(client)
  }

  async update(req, resp) {
    const { params: { id }, body } = req

    await ClientService.update(id, body)

    return resp
      .status(200)
      .json({
        message: 'Actualizado correctamente'
      })
  }

  async delete(req, resp) {
    const { params: { id } } = req

    await ClientService.delete(id)

    return resp
      .status(200)
      .json({
        message: 'Eliminado correctamente'
      })
  }
}

export default new ClientController()