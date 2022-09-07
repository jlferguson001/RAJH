import express from 'express'
 
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import productRoutes from './controllers/productRoutes.js'
import {notFound, errorHandler} from './middleware/errorMiddleware.js'

dotenv.config()

connectDB()

const app = express()

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000') // update to match the domain you will make the request from
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  )
  next()
})

app.get('/', (req, res) => {
  res.send('API is running...')
})

app.use('/api/products', productRoutes)

app.use(notFound)

app.use(errorHandler)

app.get('/api/products/:category', (req, res) => {
  const product = products.find((p) => p._id === req.params.id)
  res.json(product)
})

app.get('/api/products/:id', (req, res) => {
  const product = products.find((p) => p._id === req.params.id)
  res.json(product)
})

const PORT = process.env.PORT|| 5005

app.listen(PORT, console.log(`Server running on port ${PORT}`))
