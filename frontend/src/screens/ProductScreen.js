import React, {  useEffect} from 'react'
import { Link } from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {Row, Col, Image, ListGroup, Card, Button} from 'react-bootstrap'
import Rating from '../components/Rating'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { listProductDetails } from '../actions/productActions'
 
 const ProductScreen = ({match}) => {
    const dispatch = useDispatch() 

    const productDetails = useSelector(state => state.productDetails)
    const {loading, error, product} = productDetails
      
      useEffect(() => {
        dispatch(listProductDetails(match.params.id))
    
      }, [dispatch, match])
      
      
      
      
  return (
    <>
      <Link className='btn btn-light my-3' to='/'>
        {' '}
        Go Back{' '}
      </Link>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <Row>
          <Col md={6}>
            <Image src={product.image} alt={product.name} />
          </Col>

          <Col md={4}>
            {/* flush takes away the border */}
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <h3>Model:{'  ' + product.name}</h3>
                <h4>{product.category}</h4>
                <h5>Color:{'  ' + product.color}</h5>
              </ListGroup.Item>
              <ListGroup.Item>
                <Rating
                  value={product.rating}
                  text={`${product.numReviews} reviews`}
                />
              </ListGroup.Item>

              <ListGroup.Item>
                <h3>Price ${product.price}</h3>
                <Button className='btn' type='button'>
                  {' '}
                  Add to Cart
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      )}
    </>
  )
}

export default ProductScreen