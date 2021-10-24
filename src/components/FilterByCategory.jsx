import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchAllProducts } from '../redux/actions'

const FilterByCategory = () => {

    const [selected, setSelected] = useState(false)

    const allProducts = useSelector(state => state.products.all_products)
    const dispatch = useDispatch()


    useEffect(() => {


    }, [])

    const categories = ["men's clothing", "women's clothing", "jewelery", "electronics"]

    const handleFetchAllProducts = (category, index) => {

        if (allProducts.filter(p => p.category === category)) {

            dispatch(fetchAllProducts(category))
            setSelected(true)
        }


    }

    const handleShowAllProducts = () => {
        dispatch(fetchAllProducts())
        setSelected(false)
    }


    return (
        <div className='flex flex-col align-items-center ' >
            <h4 className='underline mx-auto'>Category</h4>
            <button className='mx-auto' onClick={() => handleShowAllProducts()} >All (20)</button>
            {

                categories.map((category, i) => (
                    <>
                        {

                            <button className={'hover:bg-yellow-500 p-2 hover:rounded-full mx-auto'} onClick={() => handleFetchAllProducts(category, i)}>{category}</button>

                        }
                    </>))
            }

        </div>
    )
}

export default FilterByCategory
