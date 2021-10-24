import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { filterProductByPriceDesc, filterProductByPriceAsc } from '../redux/actions'



const FilterByPrice = () => {

    const dispatch = useDispatch()


    useEffect(() => {


    }, [])

    const handlePriceDescending = (desc) => {

        return dispatch(filterProductByPriceDesc(desc))

    }

    const handlePriceAscending = (asc) => {

        return dispatch(filterProductByPriceAsc(asc))

    }


    return (
        <div className >
            <h4 className='underline text-center'>Filter</h4>
            <div className='flex flex-col'>

                <button className='bg-yellow-600 rounded-full my-3 text-gray-200 p-1' onClick={() => handlePriceAscending('asc')}>price asc</button>
                <button className='bg-yellow-600 rounded-full my-3 text-gray-200 p-1' onClick={() => handlePriceDescending('desc')}>price desc</button>

            </div>

        </div>
    )
}

export default FilterByPrice
