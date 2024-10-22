import { Router } from "express";
import ProductRouter from "./product/router.js";
import OrderRouter from './order/router.js'
import ClientRouter from "./client/router.js";

const MainRouter = Router()

MainRouter.use('/product', ProductRouter)
MainRouter.use('/order', OrderRouter)
MainRouter.use('/client', ClientRouter)

export default MainRouter