const express = require('express')
const { Client, Pool } = require('pg')

const PORT = 80

const app = express()
const pgPool = new Pool({
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASS
})

app.get('/', async (request, response) => {
  response.send('Hello!')
})

app.get('/articles', async (request, response) => {
  const queryResponse = await pgPool.query('SELECT * FROM articles')
    .catch(e => {
      console.log(e)
      response.sendStatus(500)
    })
  await pgPool.end()
  response.send(queryResponse.rows)
})

app.listen(PORT, () => {
  console.log(`API listening on port ${PORT}`)
})