require('dotenv').config()
const express = require('express')
const { createApp } = require('./index')
const dev = process.env.NODE_ENV !== 'production'
const pkg = require('./package.json')
const { read , write } = require('./src/middlewares')
const bodyParser = require('body-parser')

const okResult = (req, res) => res.status(200).send('OK')

createApp(dev)
  .then(handler => {
    const server = express()
    server.use(bodyParser.json())

    server.get('/api/:collection', read)
    server.post('/api/:collection', write)

    server.get('/api/status', okResult)

    server.get('*', handler)

    server.listen(process.env.PORT || 3010, '0.0.0.0', (err) => {
      if (err) throw err

      console.log(`${pkg.name} running on port ${process.env.PORT || 3010}`)
    })
  })
