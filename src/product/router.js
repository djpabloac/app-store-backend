import { Router } from 'express'
import ProductController from './controller.js'

const ProductRouter = Router()

ProductRouter.post('/', ProductController.create)
ProductRouter.get('/', ProductController.get)
ProductRouter.get('/:id', ProductController.getById)
ProductRouter.put('/:id', ProductController.update)
ProductRouter.delete('/:id', ProductController.delete)

export default ProductRouter