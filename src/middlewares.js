const MongoClient = require('mongodb')
const R = require('ramda')
const Promise = require('bluebird')
const cuid = require('cuid')

const createMongoDBConnection = (url, dbName) => ctx => MongoClient.connect(url)
  .then(
    client => Object.assign(
      ctx,
      {
        mongodb: {
          client,
          db: client.db(dbName)
        }
      }
    )
  )

const closeMongoDB = () => ctx => {
  if (ctx && ctx.mongodb) {
    ctx.mongodb.client.close()
  }

  return ctx || {}
}

const merge = (name, ctx) => data => R.merge(ctx, {[name]: data})

const runQuery = (collectionName, filter, name) => ctx => {
  return ctx.mongodb.db.collection(collectionName)
    .find(filter).toArray()
    .then(merge(name, ctx))
}

const createDocument = (collectionName, document, name) => ctx => {
  return ctx.mongodb.db.collection(collectionName)
    .insertOne(document)
    .then(() => document)
    .then(merge(name, ctx))
}

module.exports.read = (req, res) => {
  return Promise.resolve({})
    .then(createMongoDBConnection(process.env.MONGO_URL, process.env.MONGO_DB))
    .then(runQuery(req.params.collection, {}, 'data'))
    .then(closeMongoDB())
    .then(ctx => {
      return res.json(ctx.data)
    })
}

module.exports.write = (req, res) => {
  return Promise.resolve({})
    .then(createMongoDBConnection(process.env.MONGO_URL, process.env.MONGO_DB))
    .then(
      createDocument(
        req.params.collection, 
        Object.assign(
          { 
            _id: cuid(), 
            createdDate: new Date() 
          }, 
          req.body
        ), 
        'data'
      )
    )
    .then(closeMongoDB())
    .then(ctx => {
      return res.json(ctx.data)
    })
}
