import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchAllProducts } from '../redux/actions'

const Products = () => {

    const dispatch = useDispatch()
    const allProducts = useSelector(state => state.products.all_products)

    console.log(allProducts)

    useEffect(() => {
        dispatch(fetchAllProducts())
    }, [])


    return (
        <div>

        </div>
    )
}

export default Products
