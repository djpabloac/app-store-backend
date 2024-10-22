import { Router } from 'express'
import ClientController from './controller.js'

const ClientRouter = Router()

ClientRouter.post('/', ClientController.create)
ClientRouter.get('/', ClientController.get)
ClientRouter.get('/:id', ClientController.getById)
ClientRouter.put('/:id', ClientController.update)
ClientRouter.delete('/:id', ClientController.delete)

export default ClientRouter