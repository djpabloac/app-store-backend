import { Router } from "express";
import ProductRouter from "./product/router.js";
import OrderRouter from './order/router.js'
import ClientRouter from "./client/router.js";
import CommonsRouter from "./commons/router.js";

const MainRouter = Router()

MainRouter.use('/clients', ClientRouter)
MainRouter.use('/commons', CommonsRouter)
MainRouter.use('/orders', OrderRouter)
MainRouter.use('/products', ProductRouter)

export default MainRouter