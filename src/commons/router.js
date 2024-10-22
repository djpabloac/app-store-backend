import { Router } from "express";
import CommonsController from "./controller.js";

const CommonsRouter = Router()

CommonsRouter.get('/tipo-cambio', CommonsController.exchangeRate)
CommonsRouter.get('/unidad', CommonsController.unitType)
CommonsRouter.get('/moneda', CommonsController.currency)

export default CommonsRouter
