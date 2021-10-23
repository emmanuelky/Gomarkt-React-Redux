import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchAllProducts } from '../redux/actions'
import { Card, Button } from 'react-bootstrap'
import { MdOutlineAddShoppingCart } from 'react-icons/md'


const ProductList = () => {

    const dispatch = useDispatch()
    const allProducts = useSelector(state => state.products.all_products)

    console.log(allProducts)

    useEffect(() => {
        dispatch(fetchAllProducts())
    }, [])



    return (

        <div className='flex flex-wrap justify-center py-5'>
            {
                allProducts?.map(p => (
                    <div className='m-2'>
                        <Card style={{ width: '20rem', height: '24rem' }}>
                            <Card.Img variant="top" className='w-50 h-50 mx-auto' src={p.image} />
                            <Card.Body className='mx-auto'>
                                <Card.Title>{p.title}</Card.Title>
                                <div className='flex flex-wrap justify-between my-5'>
                                    <div>

                                        <span className='p-1  rounded-xl'>{p.price} €</span>
                                    </div>
                                    <div>

                                        <button className="text-3xl text-green-300"><MdOutlineAddShoppingCart /></button>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>))
            }
        </div>

    )
}

export default ProductList
