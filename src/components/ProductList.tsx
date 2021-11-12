import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchAllProducts, addToCart } from '../redux/actions'
import { Card, Button, Container, Row, Col } from 'react-bootstrap'
import { MdOutlineAddShoppingCart } from 'react-icons/md'
import { Link } from 'react-router-dom'
import SearchBar from './SearchBar'
import Loading from './Loading'
import { ReduxStore, Product } from '../Interface/index';
import { AnyAction } from 'redux'
import { ThunkDispatch } from 'redux-thunk';

type AppDispatch = ThunkDispatch<ReduxStore, any, AnyAction>;


const ProductList = () => {

    const dispatch: AppDispatch = useDispatch();
    const allProducts = useSelector<ReduxStore, Product[]>(state => state.products.all_products)
    const loading = useSelector<ReduxStore, boolean>(state => state.products.loading)

    useEffect(() => {
        dispatch(fetchAllProducts(''))
    }, [])

    const shortTitle = (title: string) => {
        return title.length > 21 ? title.slice(0, 21) : title.slice(0, 12)

    }

    const handleAddCartItems = (product: Product) => {
        dispatch(addToCart(product))
    }

    return (
        <>
            <div className='flex flex-wrap justify-center py-5'>
                {loading
                    ? <Loading />
                    : allProducts?.map(p => (
                        <Card className='m-2 mt-5' style={{ width: '15rem' }}>
                            <Link to={`/products/${p.id}`}>
                                <Card.Img variant="top" className='w-50 h-100 mx-auto align-top' src={p.image} />
                            </Link>
                            <Card.Body>
                                <div className='text-center align-self-center'>{shortTitle(p.title)}</div>
                            </Card.Body>

                            <div className="flex justify-around align-baseline pt-0 pb-2">
                                <div>{p.price} €</div>
                                <div onClick={() => handleAddCartItems(p)} className="text-3xl text-green-300 cursor-pointer"><MdOutlineAddShoppingCart /></div>
                            </div>
                        </Card>
                    ))
                }
            </div>
        </>
    )
}

export default ProductList
