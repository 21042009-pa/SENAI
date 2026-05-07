const express = require('express')
const routes = require('./routes')
const app = express() //cria aplicações web
app.use(express.json()) //interpreta requisiçoes json
app.use('/', routes)
module.exports = app