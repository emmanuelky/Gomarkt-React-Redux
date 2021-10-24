import React, { useEffect } from 'react'
import ProductList from './ProductList'
import { Container, Row, Col } from 'react-bootstrap'
import FilterByCategory from './FilterByCategory'
import FilterByPrice from './FilterByPrice'



const ProductsPage = () => {


    return (
        <Container fluid>
            <Row className='text-yellow-800'>
                <Col md={2} className='flex justify-center mx-auto text-gray-800 bg-gray-50'>

                    <div className='flex flex-col fixed top-20 py-5 mx-auto'>
                        <div className='mb-4'>
                            <FilterByCategory />
                        </div>
                        <div className='my-4'>

                            <FilterByPrice />
                        </div>
                    </div>
                </Col>
                <Col md={10}>
                    <div className='my-5'>

                        <ProductList />
                    </div>

                </Col>
            </Row>
        </Container>


    )
}

export default ProductsPage
