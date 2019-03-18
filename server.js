const express = require('express')
const parser = require('body-parser')
const path = require('path')
const crypto = require('./api/crypto')

const app = express()

app.use(parser.urlencoded({
  extended: true
}))

app.patch('/encrypt/:data', (req, res) => {
  res.send(crypto.encrypt(req.params.data))
})

app.patch('/decrypt/:data', (req, res) => {
  res.send(crypto.decrypt(req.params.data))
})

app.use(express.static(
  path.resolve(__dirname, 'public')
))

app.listen(9000, 
  console.log('Server running on http://localhost:9000')
)