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

export const filterProductByPrice = (desc, asc) => {
    return async (dispatch) => {
        try {

            dispatch({
                type: typesConstant.LOADING_PRODUCT,
                payload: true
            })

            const productData = await axios.get(desc ? `https://fakestoreapi.com/products?sort=${desc}` : `https://fakestoreapi.com/products?sort=${asc}`)

            if (productData) {

                dispatch({
                    type: typesConstant.FILTER_BY_PRICE,
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