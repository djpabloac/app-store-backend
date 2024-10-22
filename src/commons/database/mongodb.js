import { connect } from "mongoose";
import config from "../config/index.js";

export default async () => {
  try {
    await connect(config.MONGO_URI)
    console.log('mongDB Conectado')
  } catch (error) {
    console.log('Error connect mongoDB')
  }
}