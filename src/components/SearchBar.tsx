import React, { useEffect, useState } from 'react'
import { FormControl, Form } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { fetchAllProducts, searchProduct } from '../redux/actions'
import { Product, ReduxStore } from '../Interface/index';
import { AnyAction } from 'redux'
import { ThunkDispatch } from 'redux-thunk';

type AppDispatch = ThunkDispatch<ReduxStore, any, AnyAction>;

const SearchBar = () => {

    const [query, setQuery] = useState('')
    const allProducts = useSelector<ReduxStore, Product[]>(state => state.products.all_products)
    const dispatch: AppDispatch = useDispatch();


    const filteredProduct: any = allProducts?.filter(p => p.title.toLowerCase().includes(query.toLowerCase()))

    console.log(filteredProduct)

    useEffect(() => {
        if (query === '') {
            dispatch(fetchAllProducts(''))
        }
        handleProductSearch()
    }, [query.length])

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value)
    }

    const handleProductSearch = () => {

        return filteredProduct ? dispatch(searchProduct(filteredProduct)) : dispatch(fetchAllProducts(''))
    }

    console.log(query)

    return (
        <div>
            <Form className="d-flex mx-5 shadow-2xl ">
                <FormControl
                    type="text"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    value={query}
                    onChange={handleInputChange}
                    onKeyUp={() => handleProductSearch()}
                />
            </Form>
        </div>
    )
}

export default SearchBar
