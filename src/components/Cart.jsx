import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Container, Row, Col } from 'react-bootstrap'
import { RiDeleteBin6Fill } from 'react-icons/ri'




const Cart = () => {

    const cartItems = useSelector(state => state.products.cart)
    const cartProductId = cartItems.map((product) => product.id)

    const cartPrices = cartItems.map((product) => product.price)
    const cartTotal = cartPrices.reduce((current, product) => current + product, 0)

    console.log(cartTotal.toFixed(2))

    // let count = 0
    // let quantity = cartItems.map((item, i) => {

    // })


    return (
        <div className='my-5 py-5'>
            {
                cartItems.map((product, i) => (
                    <Container className='border-b-2 p-2'>
                        <Row className='align-items-center'>

                            <Col md={3}>

                                <div><img className='w-10 h-10' src={product.image} alt="" /></div>
                            </Col>
                            <Col md={3}>

                                <div>{product.title}</div>
                            </Col>
                            <Col md={2}>

                                {/* <div>{quantity}</div> */}
                            </Col>
                            <Col md={3}>

                                <div>{product.price} €</div>
                            </Col>
                            <Col md={1}>

                                <div><button><RiDeleteBin6Fill /></button></div>
                            </Col>
                        </Row>

                    </Container>
                ))
            }
            <div className='my-5'>
                <h3 className='text-center'>Total: {cartTotal.toLocaleString()}€</h3>
            </div>
            <hr />
        </div>
    )
}

export default Cart
