import { Router } from 'express'

const ClientRouter = Router()

ClientRouter.post('/', (req, resp) => {
  return resp
  .status(200)
  .json({
    message: 'Creado correctamente'
  })
})

ClientRouter.get('/', (req, resp) => {
  return resp
  .status(200)
  .json({
    message: 'Leido correctamente'
  })
})

ClientRouter.put('/', (req, resp) => {
  return resp
  .status(200)
  .json({
    message: 'Actualizado correctamente'
  })
})

ClientRouter.delete('/', (req, resp) => {
  return resp
  .status(200)
  .json({
    message: 'Eliminado correctamente'
  })
})

export default ClientRouter