import axios from 'axios'
import typesConstant from '../actions/types'



export const fetchAllProducts = () => {
    return async (dispatch) => {
        try {

            dispatch({
                type: typesConstant.LOADING_PRODUCT,
                payload: true
            })

            const productData = await axios.get('https://fakestoreapi.com/products')
            console.log(productData)

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