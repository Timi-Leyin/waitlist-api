import * as dotenv from "dotenv"
import cors from "cors"
import helmet from "helmet"
import express from "express"
import bodyParser from "body-parser"

/*
 APPLICATION 
 @Express 
*/
const app = express()

dotenv.config()
app.use(cors())
app.use(helmet())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true }))



export default app