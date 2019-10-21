import express from 'express'
const router = express.Router()
import { MongoClient } from 'mongodb'

// DB connection. Sorry: I would normally separate these concerns more
const client = new MongoClient(
  process.env.REMOTE_DB_URI, // app secret 
  { useNewUrlParser: true }
)

// GET root.com/api/titles
router.get('/', async (req, res) => {
  try {
    await client.connect()
    const db = client.db('dev-challenge')
    const collection = db.collection('Titles') // load collection from db
    const titles = await collection.find({}).toArray()

    console.log("GET: I am the first title:", titles[0].TitleName)
    res.json(titles) // send titles to React client

  } catch (error) {
    console.log(error)
    res.sendStatus(500) // error response

  } finally {
    client.close();
  }

})

module.exports = router
