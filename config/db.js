const mongoose = require('mongoose')

mongoose
  .connect(
    `mongodb+srv://AB:${process.env.DB_USER_PASS}@cluster0.0pa8q.mongodb.net/mern-project`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    }
  )
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.log('Failed to connect to mongoDB', err))
