const express = require('express')
const app = express()
const addDays = require('date-fns/addDays')

app.get('/', function (request, response) {
  let date = new Date()
  let result = addDays(
    new Date(date.getFullYear(), date.getMonth(), date.getDate()),
    100,
  )
  response.send(
    `${result.getDate()}/${result.getMonth() + 1}/${result.getFullYear()}`,
  )
})

module.exports = app

app.listen(3000)
