import React, { useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { listProducts } from '../actions/productActions'
import Developer from '../components/Developer'
import developers from '../developers' 
import {  listProductCategory } from '../actions/productActions'
import { useParams } from 'react-router-dom'

const CategoryScreen = () => {
 const dispatch= useDispatch()
     
 const productList = useSelector(state => state.productList)
 const{loading, error, products} = productList
 const { category } = useParams()
    // useEffect(() => {
    //     dispatch(productListCategoryReducer(category))
    // }, [category])
console.log(category)
  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <Row>
          {' '}
          {products.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      )}
    </>
  )
}

export default CategoryScreen