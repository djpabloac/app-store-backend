import { Router } from 'express'
import OrderController from './controller.js'

const OrderRouter = Router()

OrderRouter.post('/', OrderController.create)
OrderRouter.get('/', OrderController.get)
OrderRouter.get('/:id', OrderController.getById)
OrderRouter.delete('/:id', OrderController.delete)

export default OrderRouter