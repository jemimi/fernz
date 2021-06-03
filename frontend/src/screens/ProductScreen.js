import React, { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'
import {Row, Col, Image, ListGroup, ListGroupItem, Card, Button} from 'react-bootstrap'
import Rating from '../components/Rating'
import axios from 'axios'

//declare component and bring in the 'match' property
// ({match })  = destructing 
const ProductScreen = ({ match }) => {

    //configure component state with useState hook
    //state contains the product objet
    // setProduct is setter for this object
    const [product, setProduct] = useState({})

    //contain side effect inducing code in a useEffect hook call
    //it runs on component load and when changes happen to the dependences
    useEffect(() => {

        //configure the fetchProduct method that calls the API
        //and fetches the product with GET request
        const fetchProduct = async () =>{

            //use axios to make the GET request
            //match.params is passed via the related react-router route
            //with {data} we destructure the axios response's data
            const {data} = await axios.get(`/api/products/${match.params.id}`)

            //call the setter to set the response data to the state
            setProduct(data)
        }
        //call the method
        fetchProduct()
     }, [match.params]) //empty array


    
    
    return (
    
        <>
            <Link className='btn btn-light my-3' to='/'>Go Back</Link>
            <Row>
                <Col md={6}>
                    <Image src={product.image} alt={product.name} fluid />
                </Col>
                <Col md={3}>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                            <h3>{product.name}</h3>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Rating value={product.rating} 
                            text={`${product.numReviews} reviews`} />
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Price: ${product.price}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Description: {product.description}
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col md={3}>
                    <Card>
                    <ListGroup variant='flush'>
                    <ListGroup.Item>
                        <Row>
                            <Col>Price</Col>
                            <Col>
                            <strong>${product.price}</strong>
                            </Col>
                        </Row>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Row>
                            <Col>Status:</Col>
                            <Col>
                            {product.countInStock > 0 ? 'In Stock' :  'Out of Stock'}
                            </Col>
                        </Row>
                    </ListGroup.Item>
                    <ListGroupItem>
                        <Button className='btn-block' type='button' disabled={product.countInStock === 0}>
                            Add To Cart
                        </Button>
                    </ListGroupItem>
                    </ListGroup>
                    </Card>
                </Col>
            </Row>
        </>
        
    )
}

export default ProductScreen
