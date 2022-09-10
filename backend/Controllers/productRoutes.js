import express, { response } from 'express'
import asyncHandler from 'express-async-handler'
import Product from '../models/productModel.js'

const router = express.Router()

//  description:  fetch all products
router.get(
  '/',
  asyncHandler(async (req, res) => {
    const products = await Product.find({})
    res.json(products)
  })
)

router.get(
  '/category/:category',
  asyncHandler(async (req, res) => {
    const products = await Product.find({ category: req.params.category })
    res.json(products)
  })
)

//Category router
// router.get('/category/:category',
//   asyncHandler(async (req, res) => {
//     const products = await Product.find({category: req.params.category})
//     res.json(products)
//   }))

router.get(
  '/products/:category',
  asyncHandler(async (req, res) => {
    const product = await Product.find({ category: req.params.category })

    if (product) {
      res.json(product)
    } else {
      res.status(404)
      throw new Error('Product not found')
    }
  })
)

//  description:  fetch single products
// route          Get/api/products/:id
// access         Public

router.get(
  '/:id',
  asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id)

    if (product) {
      res.json(product)
    } else {
      res.status(404)
      throw new Error('Product not found')
    }
  })
)

//edit not working
router.patch('/:id', async(req, res, next) =>{
 
 
  const id = req.params.id;
  const updates = req.body
  const options = {new: true};
  try{
  
  const result = await Product.findByIdAndUpdate(id, updates, options);
    res.send(result)
  }catch (error){
    console.log(error.message)
  }
//   res.send('updating a single product')
})
//add new

router.post('/', (req, res,next) => {
   
    res.send('product created');
   
})


//delete
router.delete('/:id', async(req, res, next) => {
  const id = req.params.id
  try{
    const result = await Product.findByIdAndDelete(id)
    res.send(result)
  }catch (error){
    console.log(error.message)
  }})
  // res.send('deleting a single product')


export default router
