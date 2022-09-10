import express, { application, response } from 'express'
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
router.put('/:id', async(req, res, next) =>{
 
 
  try{
  const id = req.params.id;
  const update = req.body
  const options = {new: true};
  
  const result = await Product.findByIdAndUpdate(id, update, options);
    res.send(result);
  }catch (error){
    console.log(error.message)
  }
  // res.send('updating a single product')
})
//add new

router.post('/', (req, res,next) => {
   console.log(req.body);
   const product = new Product({
    id: req.body.id,
    name: req.body.name,
    image: req.body.image,
    brand: req.body.brand,
    category: req.body.category,
    color: req.body.color,
    price: req.body.price,
    coutInStock: req.body.coutInStock
   })
   product.save()
   .then(result => {
    console.log(result);
    res.send(result)
  
   })
   .catch(err => {
    console.log(err.message)
   })

    
   
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
