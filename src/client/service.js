import ClientModel from "./model.js"

class ClientService {
  async create(input) {
    await this.existsByEmail(input.email);
    const client = await ClientModel.create(input)

    return client.toJSON();
  }
  async get() {
    return ClientModel
      .find({})
      .lean()
  }
  async getById(id) {
    return ClientModel
      .findById(id)
      .lean()
  }
  async existsByEmail(email) {
    const client = await ClientModel
      .findOne({ email: email.toLowerCase() })
      .lean()
    if (client) throw new Error("Email duplicate from client")
  }
  async exists(id) {
    const client = await this.getById(id)
    if (!client) throw new Error("client not found")

    return client
  }
  async delete(id) {
    const client = await this.exists(id)

    await ClientModel.deleteOne({ _id: client._id })
  }
  async update(id, input) {
    const client = await this.exists(id)

    await ClientModel
      .updateOne({ _id: client._id }, {
        $set: input
      })
  }
}

export default new ClientService()