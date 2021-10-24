import axios from 'axios'
import typesConstant from '../actions/types'



export const fetchAllProducts = (product_category) => {
    return async (dispatch) => {
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

export const filterProductByPriceDesc = (desc) => {
    return async (dispatch) => {
        try {

            dispatch({
                type: typesConstant.LOADING_PRODUCT,
                payload: true
            })

            const filteredProductsPrice = await axios.get(`https://fakestoreapi.com/products?sort=${desc}`)
            console.log(filteredProductsPrice)
            if (filteredProductsPrice) {

                dispatch({
                    type: typesConstant.FILTER_BY_PRICE,
                    payload: filteredProductsPrice.data.sort((a, b) => b.price - a.price)
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



export const filterProductByPriceAsc = (asc) => {
    return async (dispatch) => {
        try {

            dispatch({
                type: typesConstant.LOADING_PRODUCT,
                payload: true
            })

            const filteredProductsPrice = await axios.get(`https://fakestoreapi.com/products?sort=${asc}`)
            console.log(filteredProductsPrice)
            if (filteredProductsPrice) {

                dispatch({
                    type: typesConstant.FILTER_BY_PRICE,
                    payload: filteredProductsPrice.data.sort((a, b) => a.price - b.price)
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

export const addToCart = (product) => {
    return (dispatch) => {
        dispatch({
            type: typesConstant.ADD_TO_CART,
            payload: product
        })
    }
}