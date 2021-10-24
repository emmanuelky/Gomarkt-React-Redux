import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { filterProductByPrice } from '../redux/actions'



const FilterByPrice = () => {


    // const allProducts = useSelector(state => state.products.all_products)
    const dispatch = useDispatch()


    useEffect(() => {


    }, [])

    const handlePriceAscending = (asc) => {

        return dispatch(filterProductByPrice(asc))

    }

    const handlePriceDecending = (desc) => {

        return dispatch(filterProductByPrice(desc))


    }



    return (
        <div className >
            <h4 className='underline text-center'>Filter</h4>
            <div className='flex flex-col'>

                <button className='bg-yellow-600 rounded-full my-3 text-gray-200 p-1' onClick={() => handlePriceAscending('desc')}>price dsc</button>

                <button className='bg-yellow-600 rounded-full my-3 text-gray-200 p-1' onClick={() => handlePriceDecending('asc')}>price asc</button>
            </div>

        </div>
    )
}

export default FilterByPrice
