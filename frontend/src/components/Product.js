import React from 'react'
import {Link} from 'react-router-dom'
import { Card } from 'react-bootstrap'
import Rating from './Rating'

const Product = (props) => {
  return (
    <Card className='my-3 p-3 rounded'>
      <Link to={`/product/${props.product._id}`}>
        <Card.Img src={props.product.image} variant='top' />
      </Link>

      <Card.Body>
        <Link to={`/product/${props.product._id}`}>
          <Card.Title as='div'>
            <strong>{props.product.name}</strong>
          </Card.Title>
        </Link>
        <Card.Text>
          <div className='my-3'>
            {props.product.category + '  ' + props.product.brand}
            
          </div>
        </Card.Text>
        <Card.Text>
            <Rating  value={props.product.rating} text = {`${props.product.numReviews} reviews`}/>
        </Card.Text>
        {/* <Card.Text as='h3'>${props.product.price}

        </Card.Text> */}
      </Card.Body>
    </Card>
  )
}

export default Product