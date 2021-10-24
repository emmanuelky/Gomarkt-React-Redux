import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchAllProducts } from '../redux/actions'


const ProductCategory = () => {

    const allProducts = useSelector(state => state.products.all_products)
    const dispatch = useDispatch()

    const productsCategory = allProducts.filter(product => product.category === "men's clothing" || "women's clothing" || 'jewelery' || 'electronics')


    return (<div className="py-5">
        <div className='py-5'><h2 className="text-center">Product Category</h2></div>
        <div className='flex flex-wrap justify-evenly'>

            <div className='border-b-2 p-5 shadow-2xl m-2  border-yellow-400 hover:border-yellow-600 hover:shadow-none cursor-pointer'>
                <h3 className='text-yellow-700 text-5xl hover:text-yellow-900'>MEN</h3>
            </div>

            <div className='border-b-2 p-5 shadow-2xl m-2   border-yellow-400 hover:border-yellow-600 hover:shadow-none cursor-pointer'>
                <h3 className='text-yellow-700 text-5xl hover:text-yellow-900'>WOMEN</h3>
            </div>

            <div className='border-b-2 p-5  shadow-2xl m-2  border-yellow-400 hover:border-yellow-600 hover:shadow-none cursor-pointer'>
                <h3 className='text-yellow-700 text-5xl hover:text-yellow-900'>Jewelery</h3>

            </div>  <div className='border-b-2 p-5 shadow-2xl m-2  border-yellow-400 hover:border-yellow-600 hover:shadow-none cursor-pointer'>
                <h3 className='text-yellow-700 text-5xl hover:text-yellow-900'>ELECTRONICS</h3>
            </div>
        </div>
    </div>)
}

export default ProductCategory
