import * as dotenv from "dotenv"
import cors from "cors"
import morgan from "morgan"
import helmet from "helmet"
import express from "express"
import bodyParser from "body-parser"

import error from "./middlewares/error"
/*
 APPLICATION 
 @Express 
*/
const app = express()

dotenv.config()
/* Log request only on development mode 👇 */
process.env.NODE_ENV == "development" && app.use(morgan("dev"))
app.use(cors({}))
app.use(helmet())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true }))

app.use(error)


export default app