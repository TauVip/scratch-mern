const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const userRoutes = require('./routes/user.routes')
const postRoutes = require('./routes/post.routes')
require('dotenv').config({ path: './config/.env' })
require('./config/db')
const { checkUser, requireAuth } = require('./middleware/auth.middleware')
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser())

app.get('*', checkUser)
app.get('/jwtid', requireAuth, (req, res) =>
  res.status(200).send(res.locals.user._id)
)

app.use('/api/user', userRoutes)
app.use('/api/post', postRoutes)

app.listen(process.env.PORT, () =>
  console.log(`Listening on port ${process.env.PORT}`)
)

// [Javascript Full-stack] Projet MERN | Créer un réseau social | Partie Back-end | 3:00:13
