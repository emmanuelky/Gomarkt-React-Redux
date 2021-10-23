import React, { useEffect } from 'react'
import ProductList from './ProductList'
import { Container, Row, Col } from 'react-bootstrap'
import FilterByCategory from './FilterByCategory'
import FilterByPrice from './FilterByPrice'



const ProductsPage = () => {


    return (
        <Container fluid>
            <Row>
                <Col md={1} className='mx-auto'>

                    <div className='flex flex-col fixed top-20 py-5 mx-auto'>
                        <div className='mb-4'>
                            <FilterByCategory />
                        </div>
                        <div className='my-4'>

                            <FilterByPrice />
                        </div>
                    </div>
                </Col>
                <Col md={11}>
                    <ProductList />

                </Col>
            </Row>
        </Container>


    )
}

export default ProductsPage
