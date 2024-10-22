import { CURRENCY_ENUM, EXCHANGE_RATE, UNIT_TYPE_ENUM } from "./constant/index.js";

class CommonsController {
  exchangeRate(req, resp) {
    resp.json(EXCHANGE_RATE)
  }
  unitType(req, resp) {
    resp.json(UNIT_TYPE_ENUM)
  }
  currency(req, resp) {
    resp.json(CURRENCY_ENUM)
  }
}

export default new CommonsController()
