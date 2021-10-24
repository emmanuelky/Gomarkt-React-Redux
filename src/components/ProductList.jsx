import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchAllProducts } from '../redux/actions'
import { Card, Button, Container, Row, Col } from 'react-bootstrap'
import { MdOutlineAddShoppingCart } from 'react-icons/md'
import { Link } from 'react-router-dom'


const ProductList = () => {

    const dispatch = useDispatch()
    const allProducts = useSelector(state => state.products.all_products)
    const filteredProducts = useSelector(state => state.products.filtered_products)
    // filteredProducts

    console.log(filteredProducts)

    useEffect(() => {
        dispatch(fetchAllProducts())
    }, [])

    const shortTitle = (title) => {
        return title.length > 21 ? title.slice(0, 21) : title.slice(0, 12)

    }

    return (

        <div className='flex flex-wrap justify-center py-5'>
            {
                allProducts?.map(p => (
                    <Card className='m-2' style={{ width: '15rem' }}>
                        <Link to={`/products/${p.id}`}>
                            <Card.Img variant="top" className='w-50 h-100 mx-auto align-top' src={p.image} />
                        </Link>
                        <Card.Body>
                            <div className='text-center align-self-center'>{shortTitle(p.title)}</div>
                        </Card.Body>

                        <div className="flex justify-around align-baseline pt-0 pb-2">
                            <div>{p.price} €</div>
                            <div className="text-3xl text-green-300 cursor-pointer"><MdOutlineAddShoppingCart /></div>
                        </div>
                    </Card>
                ))
            }
        </div>

    )
}

export default ProductList
