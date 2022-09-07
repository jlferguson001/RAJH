import React, { useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import{LinkContainer} from 'react-router-bootstrap'
import { Row, Col, Table, Button } from 'react-bootstrap'
import Product from '../components/Product'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { listProducts } from '../actions/productActions'
 


const ProductListScreen = () => {
 const dispatch= useDispatch ()
     
 const productList = useSelector(state => state.productList)
 const{loading, error, products} = productList

    useEffect(() => {
        dispatch(listProducts())

    }, [dispatch])

    //   const deleteHandler = (id) => {
    //     if (window.confirm('Are you sure')) {
    //       // DELETE PRODUCTS
    //     }
    //   }

    //   const createProductHandler = (product) => {
    //     //   CREATE PRODUCT
    //   }


  return (
    <>
      <Row className='align-items-center'>
        <Col>
          <h1>Products</h1>
        </Col>
        <Col className='text-right'>
          <Button className='my-3'>
            <i className='fas fa-plus'></i> Create Product
          </Button>
        </Col>
      </Row>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <Table className='table-sm'>
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>BRAND</th>
              <th>CATEGORY</th>
              <th>SUNGLASSES</th>
              <th>COLOR</th>
              <th>PRICE</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product._id}>
                <td>{product._id}</td>
                <td>{product.name}</td>
                <td>{product.brand}</td>
                <td>{product.category}</td>
                <td>{product.sunglasses}</td>
                <td>{product.price}</td>
                <td>${product.price}</td>

                <td>
                  {/* <LinkContainer to={`/admin/product/${product._id}/edit`}> */}
                    <Button variant='light' className='btn-sm'>
                      <i className='fas fa-edit'></i>
                    </Button>
                  {/* </LinkContainer> */}
                  <Button
                    variant='danger'
                    className='btn-sm'
                    
                  >
                    <i className='fas fa-trash'></i>
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </>
  )
}

 
export default ProductListScreen
