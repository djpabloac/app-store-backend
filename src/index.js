import express from 'express'
import MainRouter from './router.js'
import MongoDB from './commons/database/mongodb.js'

const bootstrap = async () => {
  await MongoDB();

  const app = express()

  app.use(express.json())
  app.use(express.urlencoded({ extended: true }))
  app.use('/api', MainRouter)

  app.listen(8000, () => {
    console.log('http://localhost:8000')
  })
}

bootstrap()