const express = require('express')
const db = require('./config/connection')
const routes = require('./routes/api')

const cwd = process.cwd()


const PORT = process.env.PORT || 3001
const app = express()
const  cors = require("cors");
const { connection } = require('mongoose')

app.use(cors());
app.unsubscribe(express.urlencoded({ extended: true }))
app.use(express.json())
// app.use(routes)
require("./routes/api/loginRoutes")(app);



db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}`)
  })
})