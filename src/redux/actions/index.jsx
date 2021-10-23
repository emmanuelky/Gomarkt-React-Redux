import typesConstant from '../actions/types'



export const fetchAllProducts = () => {
    return (dispatch) => {
        dispatch({
            type: typesConstant.FETCH_PRODUCT
        })
    }
}