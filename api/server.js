import 'dotenv/config'
import express from 'express'
// import cors from 'cors'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'

// initialize app & modules
const app = express()
// app.use(cors())
app.use(bodyParser.json())

mongoose.connect(process.env.REMOTE_DB_URI, {
  useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true
})

const db = mongoose.connection

db.on('error', console.error.bind(console, 'Connection error:'))
db.once('open', function() {
  console.log("Mongoose connected to DB.")
})

// serve static dist build

// api port listener
const port = process.env.PORT || process.env.API_PORT

app.listen(port, () => {
  console.log("Express API server listening on Port:" + port)
})
