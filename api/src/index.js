const express = require('express')
const app = express()
const PORT = 80
const DB_NAME = process.env.DB_NAME

app.get('/', (request, response) => {
  console.log(request)
  response.send('Hello World!')
})

app.get('/test', (request, response) => {
  console.log(request)
  response.send('Have a cookie!')
})

app.get('/db_data', (request, response) => {
  console.log(request)
  response.send(`DB_NAME: ${DB_NAME}`)
})

app.listen(PORT, () => {
  console.log(`API listening on port ${PORT}`)
})