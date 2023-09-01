import express from 'express'
import mongoose from 'mongoose'
const cors = require('cors')

import * as dotenv from 'dotenv'
dotenv.config()

//Import
import routes from './src/routes/projectRoute'

const MONGO_URI = process.env.MONGO_URI as string

const app = express()
//MW
app.use(cors())
app.use(express.json())
app.use((req, res, next) => {
  res.setHeader('Cross-Origin-Opener-Policy', 'same-origin-allow-popups')
  next()
})

mongoose
  .connect(MONGO_URI)
  .then(() => console.log('MongoDB Connected'))
  .catch((err) => console.log('Mongoose Connect Error: ' + err))

//Routes
app.use('/', routes)

const PORT = (process.env.PORT as string) || 5000
app.listen(PORT, () => {
  console.log('Server is running on port: ' + PORT)
})
