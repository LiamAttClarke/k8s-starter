const express = require('express')
const app = express()
const PORT = 80

app.get('/', (request, response) => {
  console.log(request)
  response.send('Hello World!')
})

app.get('/test', (request, response) => {
  console.log(request)
  response.send('Have a cookie!')
})

app.listen(PORT, () => {
  console.log(`API listening on port ${PORT}`)
})