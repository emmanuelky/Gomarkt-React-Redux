import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Container, Row, Col } from 'react-bootstrap'
import { RiDeleteBin6Fill } from 'react-icons/ri'
import { removeFromCart } from '../redux/actions'
import { Link } from 'react-router-dom'
import { BsArrowLeftSquare } from 'react-icons/bs'



const Cart = () => {

    const cartItems = useSelector(state => state.products.cart)
    const cartProductId = cartItems.map((product) => product.id)

    const cartPrices = cartItems.map((product) => product.price)
    const cartTotal = cartPrices.reduce((current, product) => current + product, 0)

    const dispatch = useDispatch()

    console.log(cartTotal.toFixed(2))

    // let count = 0
    // let quantity = cartItems.map((item, i) => {

    // })

    const handleRemoveItemFromCart = (id) => {
        dispatch(removeFromCart(id))
    }


    return (
        <div className='my-5 py-5'>
            {
                cartItems.map((product, i) => (
                    <Container className='border-b-2 p-2 my-5 px-4'>
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

                                <div onClick={() => handleRemoveItemFromCart(product.id)}><button className='text-red-600'><RiDeleteBin6Fill /></button></div>
                            </Col>
                        </Row>

                    </Container>
                ))
            }
            <div className='my-5 bg-yellow-200'>
                <h3 className='text-center'>Total: {cartTotal.toLocaleString()}€</h3>
            </div>
            <hr />
            <Link to='/products' className='no-underline '>
                <div className='flex justify-center text-center'>

                    <button className='flex align-items-center' ><BsArrowLeftSquare className='mx-2' /> Back to shop</button>
                </div>
            </Link>
        </div>
    )
}

export default Cart
