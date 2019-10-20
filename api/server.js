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
db.once('open', function () {
  console.log("Mongoose connected to DB.")
})

// serve static dist build

// api port listener
const port = process.env.PORT || process.env.API_PORT

app.listen(port, () => {
  console.log("Express API server listening on Port:" + port)
})

// temp routes / controllers
app.get('/', (req, res) => {
  res.send('Hello world!')
})

// temp schema
const { Schema } = require('mongoose')
const TitleSchema = new Schema(
  {
    Awards: Array,
    Genres: Array,
    KeyGenres: Array,
    OtherNames: Array,
    Participants: Array,
    ReleaseYear: Number, // TODO: try casting as Int32 datatype ...?
    Storylines: Array,
    TitleId: String,
    TitleName: String,
    TitleNameSortable: String,
    id: String
  }
)

// temp model
const Title = mongoose.model('Title', TitleSchema)

// temp TitlesController
app.get('/api/titles', (req, res) => {
  let titleId = '534c60c9bc028401c08dc54e'
  Title.findById({_id: titleId})
    .then((title) => {
      console.log("I AM TITLE:", title)
      res.send("Hallo!")
    })
})
