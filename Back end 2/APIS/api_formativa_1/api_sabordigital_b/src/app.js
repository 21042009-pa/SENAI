const express = require('express')
const routes = require('./routes')
const path = require("path")
const app = express() //cria aplicações web
app.use(express.json()) //interpreta requisiçoes json
app.use('/', routes)
module.exports = app

app.use('/uploads', express.static(path.join(__dirname, "../../uploads")))