import express from 'express'
import morgan from 'morgan'
import config from './commons/config/index.js'
import mongoDB from './commons/database/mongodb.js'
import { responseFormatter } from './commons/middleware/index.js';
import mainRouter from './router.js'

const bootstrap = async () => {
  await mongoDB();

  const app = express()

  app.use(morgan('dev'))
  app.use(express.json())
  app.use(express.urlencoded({ extended: true }))
  app.use(responseFormatter)
  app.use('/api', mainRouter)

  const { PORT } = config
  app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`)
  })
}

bootstrap()