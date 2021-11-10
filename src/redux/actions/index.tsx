import axios from 'axios'
import typesConstant from './types'
import { Dispatch } from 'redux'
import { Product } from '../../Interface'


export const fetchAllProducts = (product_category: string) => {
    return async (dispatch: Dispatch) => {
        try {

            dispatch({
                type: typesConstant.LOADING_PRODUCT,
                payload: true
            })

            const productData = await axios.get(product_category ? `https://fakestoreapi.com/products/category/${product_category}` : 'https://fakestoreapi.com/products/')
            // console.log(productData)

            if (productData) {

                dispatch({
                    type: typesConstant.FETCH_PRODUCT,
                    payload: productData.data
                })


                dispatch({
                    type: typesConstant.LOADING_PRODUCT,
                    payload: false
                })
            }
        } catch (e) {
            console.error(e)
        }


    }
}

export const filterProductByPriceDesc = (desc: string) => {
    return async (dispatch: Dispatch) => {
        try {

            dispatch({
                type: typesConstant.LOADING_PRODUCT,
                payload: true
            })

            const filteredProductsPrice = await axios.get(`https://fakestoreapi.com/products?sort=${desc}`)
            console.log(filteredProductsPrice)
            if (filteredProductsPrice) {

                dispatch({
                    type: typesConstant.FILTER_BY_PRICE_DSC,
                    payload: filteredProductsPrice
                })


                dispatch({
                    type: typesConstant.LOADING_PRODUCT,
                    payload: false
                })
            }
        } catch (e) {
            console.error(e)
        }
    }
}



export const filterProductByPriceAsc = (asc: string) => {
    return async (dispatch: Dispatch) => {
        try {

            dispatch({
                type: typesConstant.LOADING_PRODUCT,
                payload: true
            })

            const filteredProductsPrice = await axios.get(`https://fakestoreapi.com/products?sort=${asc}`)
            console.log(filteredProductsPrice)
            if (filteredProductsPrice) {

                dispatch({
                    type: typesConstant.FILTER_BY_PRICE_ASC,
                    payload: filteredProductsPrice
                })


                dispatch({
                    type: typesConstant.LOADING_PRODUCT,
                    payload: false
                })
            }
        } catch (e) {
            console.error(e)
        }
    }
}

export const addToCart = (product: Product) => {
    return (dispatch: Dispatch) => {
        dispatch({
            type: typesConstant.ADD_TO_CART,
            payload: product
        })
    }
}

export const removeFromCart = (id: number) => {
    return (dispatch: Dispatch) => {
        dispatch({
            type: typesConstant.REMOVE_FROM_CART,
            payload: id
        })
    }
}


export const searchProduct = (product: Product) => {
    return (dispatch: Dispatch) => {
        dispatch({
            type: typesConstant.SEARCH_PRODUCT,
            payload: product
        })
    }
}