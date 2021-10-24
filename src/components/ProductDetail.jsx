import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Card, Button, Container, Row, Col } from 'react-bootstrap'
import { MdOutlineAddShoppingCart } from 'react-icons/md'


const ProductDetail = () => {

    const allProducts = useSelector(state => state.products.all_products)

    console.log(allProducts)
    const { id } = useParams()


    const singleProduct = allProducts.find(product => product.id === parseInt(id))
    console.log(singleProduct)


    return (
        <div className='flex my-5 '>

            {

                <>
                    <Container className='my-5 py-5'>
                        <Row>
                            <Col md={6}>

                                <div><img src={singleProduct.image} alt="" /></div>
                            </Col>
                            <Col md={6}>

                                <div>
                                    <div>{singleProduct.title}</div>
                                    <div>Description: {singleProduct.description}</div>
                                    <div>Category: {singleProduct.category}</div>
                                    <div>Total Ratings: {singleProduct.rating.count}</div>
                                    <div>Rating: {singleProduct.rating.rate}/5</div>
                                    <div>{singleProduct.price}</div>
                                    <div className="text-3xl text-green-300 cursor-pointer"><MdOutlineAddShoppingCart /></div>

                                </div>
                            </Col>
                        </Row>
                    </Container>
                </>

            }
        </div>
    )
}

export default ProductDetail
