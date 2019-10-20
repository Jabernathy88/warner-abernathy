import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'

// initialize app & modules
const app = express()
app.use(cors())
app.use(bodyParser.json())

// serve static dist build

// api port listener
