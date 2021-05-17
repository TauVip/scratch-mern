const express = require('express')
const bodyParser = require('body-parser')
const userRouter = require('./routes/user.routes')
require('dotenv').config({ path: './config/.env' })
require('./config/db')
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/api/user', userRouter)

app.listen(process.env.PORT, () =>
  console.log(`Listening on port ${process.env.PORT}`)
)

// [Javascript Full-stack] Projet MERN | Créer un réseau social | Partie Back-end | 1:06:59
