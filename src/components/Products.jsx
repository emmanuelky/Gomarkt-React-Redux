import React, { useEffect } from 'react'
import ProductList from './ProductList'
import { Container, Row, Col } from 'react-bootstrap'



const Products = () => {


    return (
        <Container fluid>
            <Row>
                <Col md={2}>

                    <div className='fixed top-20 border py-5'><h3>Filter</h3>  </div>
                </Col>
                <Col md={10}>
                    <div className=''><ProductList /> </div>

                </Col>
            </Row>
        </Container>


    )
}

export default Products
