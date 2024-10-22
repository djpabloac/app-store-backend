import { connect } from "mongoose";
import config from "../config/index.js";

export default async () => {
  try {
    await connect(config.MONGO_URI)
    console.log('mongoDB Conectado')
  } catch (error) {
    console.log('Error al conectarse a mongoDB:', error)
  }
}