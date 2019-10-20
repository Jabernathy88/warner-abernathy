import 'dotenv/config'
import express from 'express'
import bodyParser from 'body-parser'
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// initialize app & modules
const app = express()
app.use(bodyParser.json())

// mongo connection
const client = new MongoClient(process.env.REMOTE_DB_URI, { useNewUrlParser: true })

const findDocuments = function(db, callback) {
  // Get the documents collection
  const collection = db.collection('Titles');
  // Find some documents
  collection.find({}).toArray(function(err, docs) {
    assert.equal(err, null);
    console.log("Found the following records");
    console.log(docs[0])
    callback(docs);
  });
}

client.connect(function (err) {
  assert.equal(null, err)
  console.log("Connected successfully to server")

  const db = client.db('dev-challenge')
  
  findDocuments(db, function() {
    client.close();
  });
})

// api port listener
const port = process.env.PORT || process.env.API_PORT

app.listen(port, () => {
  console.log("Express API server listening on Port:" + port)
})

app.get('/', (req, res) => {
  res.send('Hello world!')
})
