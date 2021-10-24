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

                                <div><img className='w-1/1 h-1/1' src={singleProduct.image} alt="" /></div>
                            </Col>
                            <Col md={6}>

                                <div className='mx-4 text-yellow-800'>
                                    <div className=' my-4 text-3xl'>{singleProduct.title}</div>
                                    <hr />
                                    <div className=' my-4 text-xs text-gray-600'>{singleProduct.description}</div>
                                    <div className=' my-4 text-xl'>Category: {singleProduct.category}</div>
                                    <div className=' mt-4 text-xl'>Rating: {singleProduct.rating.rate}/5</div>
                                    <div className=' mb-4 text-xl'>Total Ratings: {singleProduct.rating.count}</div>
                                    <hr />
                                    <div className='flex justify-between my-5'>
                                        <div className='text-gray-100 my-2 text-xl bg-yellow-800 p-2 rounded-lg'>{singleProduct.price}€</div>
                                        <div className="text-5xl text-green-600 cursor-pointer"><MdOutlineAddShoppingCart /></div>
                                    </div>
                                    <hr />

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
