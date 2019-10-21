import 'dotenv/config'
import express from 'express' // babel configuration enables ES6 'import' syntax
import bodyParser from 'body-parser'
import cors from 'cors'

// initialize app & modules
const app = express()
app.use(bodyParser.json())
app.use(cors());

// React as view engine
const serveStatic = require("serve-static")
const path = require('path');
app.use(serveStatic(path.join(__dirname, '../client/build')))
app.get('/', (req, res) => {
  res.sendFile(__dirname + '../client/build/index.html')
})

// api port listener
const port = process.env.PORT || process.env.API_PORT

app.listen(port, () => {
  console.log("Express API server listening on Port:" + port)
})

app.get('/api', (req, res) => {
  res.send('Hello from Express API server.')
})

// register controller for titles route
const titlesRoute = require('./routes/titlesRoute')
app.use('/api/titles', titlesRoute)
