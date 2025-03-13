const express = require('express')
const cors = require('cors')
require('dotenv').config()
require('./config/db')
const authRoutes = require('./routes/authRoutes')
const expenseRoutes = require('./routes/expenseRoutes')


const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/auth', authRoutes)
app.use('/expense', expenseRoutes)

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`)
})

app.get('/', (req, res) => {
  res.status(200).send(`h1>Welcome to the backend</h1>`)
})